#!/usr/bin/env python3
"""Generate 9 electrics + carpentry guide pages and update lib files."""

import os

GUIDES = [
    # ---- ELECTRICS ----
    {
        "slug": "replace-a-plug-fuse",
        "fn_name": "ReplaceAPlugFuse",
        "title": "Replace a plug fuse",
        "h1": "Replace a plug fuse",
        "saves_headline": "Save £30–60 today",
        "meta_line": "5 mins · Beginner · Saves £30–60 vs an electrician",
        "meta_title": "Replace a Plug Fuse | FixItFirst",
        "meta_desc": "Replace a plug fuse in 5 minutes. Step-by-step UK guide — covers fuse ratings, how to test a fuse, and what to do if it blows again. Save £30–60.",
        "before": [
            "UK plugs contain a small fuse inside them. When an appliance suddenly stops working, the plug fuse is the first thing to check — it costs £1 and takes 2 minutes.",
            "This fix works for any standard UK 3-pin plug. If the appliance trips the whole circuit rather than just going dead, see our circuit breaker guide instead.",
        ],
        "tools": [
            ("✓", "Flat-head screwdriver", "to open the plug"),
            ("!", "Replacement fuse", "buy: £1–3 — must match the existing rating (3A or 13A stamped on the side)"),
        ],
        "steps": [
            ("Unplug from the wall", "Never work on a plugged-in appliance. Pull it out of the socket first."),
            ("Unscrew the plug", "Flip the plug over. There is a single screw in the centre — undo it with a flat-head screwdriver. The plug opens into two halves."),
            ("Remove the fuse", "The fuse is the small cylinder sitting between the live and neutral pins. Pop one end out with the tip of a screwdriver, or pull it with your fingernail."),
            ("Check the fuse", "Hold it up to a light. A blown fuse often shows a visible broken wire inside. If you cannot tell by looking, swap it for a new one of the same rating and test the appliance."),
            ("Fit the correct replacement", "Check the rating stamped on the old fuse — usually 3A (for appliances under 700W like lamps and radios) or 13A (for appliances above 700W like kettles and irons). Use the exact same rating."),
            ("Reassemble and test", "Press the new fuse into the clips, close the plug, tighten the screw, and plug the appliance in to test."),
        ],
        "beginners_wrong": [
            "Fitting a higher-rated fuse to stop it blowing — a 13A fuse in a lamp is a fire risk. Always match the rating.",
            "Not investigating why it blew — if the new fuse blows immediately, the appliance is faulty. Stop using it.",
            "Opening a plug that is still in the socket — always unplug first.",
        ],
        "stop_call_pro": [
            ("The new fuse blows immediately — the appliance is faulty; stop using it and get it repaired or replaced", True),
            ("There are scorch marks inside the plug or on the cable", True),
            ("The cable is damaged or the wires are exposed", False),
        ],
        "pro_type": "electrician",
        "cost_rows": [
            ("Replacement fuse", "£1–3"),
            ("Pack of spare fuses", "£3–5"),
            ("Electrician call-out", "£30–60"),
        ],
        "learned": "You now know how UK plug fuses work, how to match fuse ratings to appliances, and how to diagnose a blown fuse. This applies to every plug-top appliance in your home.",
        "last_updated": "March 2025",
        "difficulty_comparison": "The easiest electrical job there is — no wiring involved",
        "completed_count": 9241,
        "renter_warning": "Replacing a plug fuse is basic maintenance any tenant can do. If the appliance is one your landlord provided and it keeps blowing fuses, report it — a faulty appliance is their responsibility to replace.",
        "guide_tools": ["screwdriver-flat"],
        "category": "Electrics",
        "time": "5 mins",
        "cost": "£1–3",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £30–60 today",
        "uk_specific": True,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "reset-a-tripped-circuit-breaker",
        "fn_name": "ResetATrippedCircuitBreaker",
        "title": "Reset a tripped circuit breaker",
        "h1": "Reset a tripped circuit breaker",
        "saves_headline": "Save £40–60 today",
        "meta_line": "10 mins · Beginner · Saves £40–60 vs an electrician",
        "meta_title": "Reset a Tripped Circuit Breaker | FixItFirst",
        "meta_desc": "Reset a tripped circuit breaker in 10 minutes. Step-by-step guide to your consumer unit — covers overloads, faults, and RCD trips. Save £40–60.",
        "before": [
            "A tripped circuit breaker is a safety feature, not a fault. It has cut the power to protect your wiring. Resetting it takes 2 minutes.",
            "Your consumer unit (fuse box) is usually under the stairs, in the hallway, or in the kitchen. Open it and look for any switch that is in a different position to the others.",
        ],
        "tools": [
            ("✓", "No tools needed", "just your consumer unit"),
        ],
        "steps": [
            ("Find the consumer unit", "Open the cover of your consumer unit (the grey or white box with rows of switches). Look for a breaker that has tripped to the middle or off position — it will be out of line with the others."),
            ("Identify the circuit", "The breakers are usually labelled — upstairs sockets, downstairs lights, etc. Knowing which one tripped tells you where to look for the cause."),
            ("Reduce the load first", "If the breaker tripped due to overload (too many appliances on one circuit), unplug several items from that circuit before resetting. Overloaded circuits are the most common cause."),
            ("Reset the breaker", "Push the switch firmly all the way to off, then back up to on. It should click and stay in the on position."),
            ("Test the circuit", "Turn on a light or plug in one appliance to confirm power is restored on that circuit."),
            ("If it trips again", "Unplug every appliance on that circuit one at a time, then reset. When the breaker stays up with one item unplugged, that item is faulty — do not use it."),
        ],
        "beginners_wrong": [
            "Resetting without reducing the load — it will just trip again immediately.",
            "Ignoring a breaker that keeps tripping — a recurring trip means a fault that needs an electrician.",
            "Confusing the RCD (the large test switch) with individual breakers — if the RCD has tripped, press Test and then reset it by pushing firmly up.",
        ],
        "stop_call_pro": [
            ("The breaker will not stay on after resetting with all appliances unplugged", True),
            ("There is a burning smell or scorch marks near the consumer unit", True),
            ("The RCD will not reset and keeps tripping", False),
        ],
        "pro_type": "electrician",
        "cost_rows": [
            ("Resetting yourself", "Free"),
            ("Electrician to investigate a fault", "£80–150"),
            ("Electrician emergency call-out", "£100–250"),
        ],
        "learned": "You now understand how your consumer unit works, what a trip means, and how to safely reset it. Knowing your circuit labels is one of the most useful things you can do as a homeowner.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Easier than changing a lightbulb — just finding the box and flicking a switch",
        "completed_count": 6187,
        "renter_warning": "If the circuit keeps tripping, report it to your landlord in writing — it may indicate a wiring fault that is their responsibility to investigate. Do not ignore recurring trips.",
        "guide_tools": [],
        "category": "Electrics",
        "time": "10 mins",
        "cost": "Free",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £40–60 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "replace-a-light-switch",
        "fn_name": "ReplaceALightSwitch",
        "title": "Replace a light switch",
        "h1": "Replace a light switch",
        "saves_headline": "Save £60–100 today",
        "meta_line": "30 mins · Beginner · Saves £60–100 vs an electrician",
        "meta_title": "Replace a Light Switch | FixItFirst",
        "meta_desc": "Replace a light switch safely in 30 minutes. Step-by-step UK guide — covers turning off power, wiring, and fitting the new plate. Save £60–100.",
        "before": [
            "Replacing a light switch is one of the safest electrical jobs at home. Light switches carry low current, and the work is entirely at the switch — not at the consumer unit.",
            "The critical rule: always turn off the power at the consumer unit before touching any wiring. Not just the switch itself — the actual circuit breaker.",
        ],
        "tools": [
            ("✓", "Flat-head screwdriver", "to open terminal screws"),
            ("✓", "Cross-head screwdriver", "to remove the face plate"),
            ("✓", "Phone camera", "photograph the wiring before disconnecting anything"),
            ("✓", "Pipe & cable detector", "to confirm no cables in the wall before any drilling"),
            ("!", "Replacement switch", "buy: £5–15 — standard 1-gang or 2-gang white plate from any hardware shop"),
        ],
        "steps": [
            ("Turn off the power at the consumer unit", "Find the lighting circuit breaker for this room in your consumer unit and switch it off. Test the light confirms the power is off."),
            ("Remove the old switch plate", "Undo the two screws on the face plate. Gently ease it away from the wall — the wires are still connected behind it."),
            ("Photograph the wiring", "Before touching anything, take a clear photo showing exactly which wire goes to which terminal. This is your reference if anything looks unclear later."),
            ("Disconnect the wires", "Loosen each terminal screw and pull the wire free. Note the terminal labels — COM (common), L1, L2."),
            ("Connect the new switch", "Using your photo as a guide, reconnect each wire to the matching terminal on the new switch. Tighten each terminal screw firmly so the wire cannot pull free."),
            ("Fit and test", "Fold the wires carefully back into the backbox, screw the new plate in, restore power at the consumer unit, and test the switch."),
        ],
        "beginners_wrong": [
            "Not turning off the power at the consumer unit — turning off the switch is not enough. The live wire is still live.",
            "Reconnecting wires to the wrong terminals — always use your photo as a reference.",
            "Overtightening the face plate screws — this cracks the plastic. Finger-tight plus a quarter-turn is enough.",
        ],
        "stop_call_pro": [
            ("You find more than 3 wires at the switch — this may be two-way switching or loop wiring", True),
            ("There is any burning smell or discolouration on the existing wiring", True),
            ("You are not confident after seeing the wiring — there is no shame in stopping", False),
        ],
        "pro_type": "electrician",
        "cost_rows": [
            ("Replacement switch plate", "£5–15"),
            ("With matching sockets to update the room", "£20–40"),
            ("Electrician would charge", "£60–100"),
        ],
        "learned": "You now understand how a single-gang light switch is wired and how to safely isolate a circuit. This transfers to replacing plug sockets and fitting dimmer switches.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Slightly more involved than replacing a plug fuse — but still very manageable for a beginner",
        "completed_count": 3028,
        "renter_warning": "Like-for-like switch replacement is generally acceptable, but always get your landlord's written agreement before doing any electrical work in a rented property. Keep a record of what you did.",
        "guide_tools": ["screwdriver-flat", "screwdriver-cross", "cable-detector"],
        "category": "Electrics",
        "time": "30 mins",
        "cost": "£5–15",
        "level": "Beginner",
        "difficulty": 2,
        "saves": "Save £60–100 today",
        "uk_specific": True,
        "quick_win": False,
        "skill_points": 20,
    },
    {
        "slug": "fix-a-doorbell",
        "fn_name": "FixADoorbell",
        "title": "Fix a doorbell",
        "h1": "Fix a doorbell",
        "saves_headline": "Save £40–80 today",
        "meta_line": "30 mins · Beginner · Saves £40–80 vs an electrician",
        "meta_title": "Fix a Doorbell | FixItFirst",
        "meta_desc": "Fix a broken doorbell in 30 minutes. Step-by-step guide covering batteries, button faults, wiring, and wireless replacements. Save £40–80.",
        "before": [
            "Most doorbell faults are simple: dead batteries, a corroded button, or a loose wire. Check in that order — you will fix it in 10 minutes 70% of the time.",
            "This guide covers standard battery-powered and low-voltage wired doorbells. If your doorbell is hardwired to the mains (no battery, no transformer visible), stop and call an electrician.",
        ],
        "tools": [
            ("✓", "Cross-head screwdriver", "to remove the button from the wall"),
            ("✓", "Flat-head screwdriver", "to open terminal connections"),
            ("!", "Replacement batteries", "buy: £3–5 — check the chime unit inside; most use AA or a 9V block"),
            ("!", "Replacement button", "buy: £5–10 if the button is faulty"),
        ],
        "steps": [
            ("Replace the batteries first", "Open the chime unit inside your home (the box that makes the sound). Replace all batteries with fresh ones and test. This solves most doorbell faults."),
            ("Inspect the button outside", "Unscrew the button from the wall — usually two small screws. Look at the two wire terminals. Clean any green corrosion with a dry cloth or fine sandpaper."),
            ("Test the button directly", "With the button removed, briefly touch the two wires together for a second. If the chime sounds, the button is the fault — replace it."),
            ("Replace the button if faulty", "Take the old button to a hardware shop to match the style. Connect the two wires to the terminals on the new button (polarity does not matter for doorbells) and screw it back to the wall."),
            ("Check the wiring", "Trace the wire from the button along the wall to the chime unit. Look for any breaks, sharp kinks, or loose connections at either end. Reconnect any loose terminals."),
            ("Consider a wireless upgrade", "If the wiring is old or hidden in the wall and unreliable, a wireless doorbell (£15–25) eliminates the wiring altogether and takes 10 minutes to fit."),
        ],
        "beginners_wrong": [
            "Not checking batteries first — it is the cause in the majority of cases and takes 30 seconds.",
            "Assuming the wiring is the problem without testing the button directly first.",
            "Buying a wired replacement button without checking the wire length and connection type.",
        ],
        "stop_call_pro": [
            ("The doorbell is hardwired to the mains — no batteries or transformer visible", True),
            ("There is a burning smell or scorch marks near the chime unit", True),
            ("It is a smart video doorbell with complex wiring you are not familiar with", False),
        ],
        "pro_type": "electrician",
        "cost_rows": [
            ("New batteries", "£3–5"),
            ("New button", "£5–10"),
            ("Wireless doorbell system", "£15–25"),
            ("Electrician would charge", "£40–80"),
        ],
        "learned": "You can now diagnose a doorbell fault systematically — batteries, button, then wiring. This logical approach to fault-finding applies to any low-voltage electrical system.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar difficulty to replacing a plug fuse — mostly fault-finding rather than wiring",
        "completed_count": 2143,
        "renter_warning": "A broken doorbell is the landlord's responsibility to repair. Report it in writing. Battery replacement is reasonable tenant maintenance; anything beyond that should be the landlord's cost.",
        "guide_tools": ["screwdriver-cross"],
        "category": "Electrics",
        "time": "30 mins",
        "cost": "£3–25",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £40–80 today",
        "uk_specific": False,
        "quick_win": False,
        "skill_points": 20,
    },
    # ---- CARPENTRY ----
    {
        "slug": "fix-a-squeaky-floorboard",
        "fn_name": "FixASqueakyFloorboard",
        "title": "Fix a squeaky floorboard",
        "h1": "Fix a squeaky floorboard",
        "saves_headline": "Save £40–60 today",
        "meta_line": "20 mins · Beginner · Saves £40–60 vs a carpenter",
        "meta_title": "Fix a Squeaky Floorboard | FixItFirst",
        "meta_desc": "Fix a squeaky floorboard in 20 minutes using a screw. Step-by-step beginner guide. Save £40–60 vs calling a carpenter.",
        "before": [
            "Squeaky floorboards are caused by the board rubbing against a joist or a neighbouring board. Screwing the board down tight stops the movement and kills the squeak.",
            "Always use a pipe and cable detector before drilling into a floor. Pipes and cables run under floors — particularly near bathrooms, kitchens, and walls.",
        ],
        "tools": [
            ("✓", "Pipe & cable detector", "essential before screwing into a floor"),
            ("✓", "Drill or screwdriver", "to drive the screw"),
            ("!", "50mm wood screws", "buy: £1–3 — countersinking screws are ideal"),
            ("!", "Wood filler", "buy: £3–5 if the floor is visible and you want a neat finish"),
        ],
        "steps": [
            ("Find and mark the squeak", "Walk slowly across the board and mark the squeaky area with a small piece of tape."),
            ("Check for pipes and cables", "Run a cable/pipe detector across the full length of the board before drilling anything. Cables run vertically from sockets and switches; pipes run to radiators and bathrooms."),
            ("Find the joist", "Knock along the board with your knuckle. A dull, solid sound means there is a joist below; a hollow sound means there is not. Joists are typically spaced 400mm apart."),
            ("Drill a pilot hole", "Drill a pilot hole through the board into the joist below — use a bit slightly narrower than your screw shank. This prevents the board splitting."),
            ("Drive the screw", "Drive a 50mm wood screw through the pilot hole. The screw should pull the board firmly down onto the joist. Drive the head just below the surface."),
            ("Fill and finish", "Fill the screw hole with wood filler if the floor is exposed. Allow to dry, sand flush, and touch up with floor paint or varnish if needed."),
        ],
        "beginners_wrong": [
            "Screwing without checking for cables and pipes first — this is the most dangerous mistake on this job.",
            "Screwing between joists — the board just flexes and squeaks again. You must hit the joist.",
            "Using screws that are too short — they need to go at least 25mm into the joist to hold.",
        ],
        "stop_call_pro": [
            ("The board has significant bounce or flex — this may indicate a damaged joist", True),
            ("There is damp, rot, or discolouration visible when you inspect the board", True),
            ("You cannot locate the joist and the squeak is in a bathroom or kitchen", False),
        ],
        "pro_type": "carpenter",
        "cost_rows": [
            ("Wood screws only", "£2–3"),
            ("Screws and filler", "£5–8"),
            ("Carpenter would charge", "£40–60"),
        ],
        "learned": "You now know how floorboards and joists relate, how to locate a joist by sound, and how to safely screw into a floor. This transfers to fitting skirting boards and laying new flooring.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar to filling a hole in a wall — quick once you know the technique",
        "completed_count": 1876,
        "renter_warning": "Report squeaky floorboards to your landlord in writing. Screwing down a floorboard is a minor repair — most landlords are fine with it, but get written permission before you start.",
        "guide_tools": ["drill", "cable-detector"],
        "category": "Carpentry",
        "time": "20 mins",
        "cost": "£2–8",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £40–60 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "fix-a-sticking-door",
        "fn_name": "FixAStickingDoor",
        "title": "Fix a sticking door",
        "h1": "Fix a sticking door",
        "saves_headline": "Save £50–80 today",
        "meta_line": "45 mins · Beginner · Saves £50–80 vs a carpenter",
        "meta_title": "Fix a Sticking Door | FixItFirst",
        "meta_desc": "Fix a sticking door in under an hour. Step-by-step guide — covers dropped hinges, swollen wood, and sanding. Save £50–80 vs a carpenter.",
        "before": [
            "Doors stick because of three things: loose hinges (most common), swollen wood from humidity, or a shifted door frame.",
            "Always check the hinges first. A single loose screw on a hinge causes the door to drop and drag — and tightening it takes 30 seconds.",
        ],
        "tools": [
            ("✓", "Flat-head screwdriver", "to tighten hinge screws"),
            ("✓", "Cross-head screwdriver", "some hinges use cross-head fixings"),
            ("!", "80-grit sandpaper", "buy: £2–4 if sanding is needed"),
            ("!", "Candle or bar of soap", "free lubricant — rub on the door edge before sanding"),
        ],
        "steps": [
            ("Find exactly where it sticks", "Close the door slowly and watch and feel for where it drags. Mark the sticking point with a pencil on the door edge."),
            ("Check and tighten the hinges", "Look at both hinges — top and bottom. Check every screw. Tighten any that are loose. A dropped top hinge is the most common cause of a sticking door."),
            ("Lubricate the edge", "Rub a candle or bar of soap along the marked sticking area. Open and close the door several times. This often solves minor sticking without any sanding."),
            ("Sand the sticking area", "If lubrication alone does not work, sand back the marked area with 80-grit paper, working in the direction of the grain. Remove a small amount and test — it is easier to remove more than to add it back."),
            ("Test after each pass", "Re-hang the door and test before sanding more. You want it just free — not loose."),
            ("Seal the bare wood", "Bare sanded wood absorbs moisture and will swell and stick again. Prime and paint or varnish any area you have sanded before the week is out."),
        ],
        "beginners_wrong": [
            "Reaching for sandpaper before checking the hinges — a loose hinge is the cause far more often.",
            "Removing too much material in one go — take small passes and test each time.",
            "Not sealing the sanded area — it will stick again within weeks if left bare.",
        ],
        "stop_call_pro": [
            ("The door frame is visibly twisted, cracked, or no longer square", True),
            ("The door sticks all the way around, not just at one point", True),
            ("The door has dropped so far that the hinges are pulling out of the frame", False),
        ],
        "pro_type": "carpenter",
        "cost_rows": [
            ("Tightening hinges only", "Free"),
            ("With sandpaper", "£2–4"),
            ("Carpenter would charge", "£50–80"),
        ],
        "learned": "You now understand why doors stick and how to work through the causes systematically. This transfers to adjusting door frames, fitting new hinges, and hanging new internal doors.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar to filling a hole in a wall — methodical more than technical",
        "completed_count": 2654,
        "renter_warning": "Sticking doors are the landlord's responsibility to fix. Report it in writing. Tightening a loose hinge screw is fine; sanding the door should have the landlord's agreement first.",
        "guide_tools": ["screwdriver-flat"],
        "category": "Carpentry",
        "time": "45 mins",
        "cost": "Free–£4",
        "level": "Beginner",
        "difficulty": 2,
        "saves": "Save £50–80 today",
        "uk_specific": False,
        "quick_win": False,
        "skill_points": 20,
    },
    {
        "slug": "fix-a-sticking-drawer",
        "fn_name": "FixAStickingDrawer",
        "title": "Fix a sticking drawer",
        "h1": "Fix a sticking drawer",
        "saves_headline": "Save £30–50 today",
        "meta_line": "15 mins · Beginner · Saves £30–50 vs a carpenter",
        "meta_title": "Fix a Sticking Drawer | FixItFirst",
        "meta_desc": "Fix a sticking drawer in 15 minutes with no tools. Step-by-step guide covering wooden runners, metal runners, and humidity swelling. Save £30–50.",
        "before": [
            "Most sticky drawers are caused by humidity making the wood swell, or grit and debris on the runners. Wax and a clean fixes it in minutes.",
            "Pull the drawer completely out first — look at the runners and the drawer sides. That tells you exactly what you are dealing with.",
        ],
        "tools": [
            ("✓", "Nothing essential", "most fixes need no tools at all"),
            ("!", "Candle or bar of soap", "free — the best lubricant for wooden runners"),
            ("!", "120-grit sandpaper", "buy: £2 — only needed if wax alone does not fix it"),
        ],
        "steps": [
            ("Pull the drawer out completely", "Remove it fully so you can inspect the runners and the sides of the drawer box."),
            ("Clean the runners", "Wipe the wooden or metal runners inside the cabinet, and the sides and bottom edges of the drawer, with a dry cloth. Remove any grit, crumbs, or old wax build-up."),
            ("Check the runners for damage", "Look for splinters on wooden runners, or bent sections on metal runners. Bent metal runners can often be carefully straightened with pliers."),
            ("Wax the runners", "Rub a candle or dry bar of soap along the wooden runners and the sides of the drawer. Cover the full length. This is the most effective fix for wooden drawer systems."),
            ("Replace and test", "Slide the drawer back in and test. It should move smoothly. If still stiff, apply more wax and test again."),
            ("Sand if still sticking", "If wax does not fully solve it, lightly sand the sides of the drawer with 120-grit paper — a few strokes per side. Test after each pass. Seal with wood varnish when done."),
        ],
        "beginners_wrong": [
            "Sanding before cleaning and waxing — wax alone solves it in most cases.",
            "Over-sanding — the drawer will then be too loose and rattle. Make small passes.",
            "Ignoring metal runner issues — if the metal runner is bent or the wheel is broken, wax will not help. Inspect before waxing.",
        ],
        "stop_call_pro": [
            ("The drawer box itself is cracked, split, or delaminating", True),
            ("The drawer is from a fitted kitchen unit still under warranty — check before modifying", False),
        ],
        "pro_type": "carpenter",
        "cost_rows": [
            ("Wax lubrication only", "Free"),
            ("With sandpaper", "£2–3"),
            ("Carpenter would charge", "£30–50"),
        ],
        "learned": "You now know why drawers stick and how to fix them with minimal effort. This technique works on any wooden furniture — chests of drawers, wardrobes, and bedside tables.",
        "last_updated": "March 2025",
        "difficulty_comparison": "One of the easiest jobs on the site — no tools required in most cases",
        "completed_count": 3312,
        "renter_warning": "Sticking drawers in fitted furniture are the landlord's responsibility. Wax lubrication is harmless and fine for any tenant to do. Sanding should be agreed with the landlord first.",
        "guide_tools": [],
        "category": "Carpentry",
        "time": "15 mins",
        "cost": "Free–£3",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £30–50 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "hang-a-picture-frame",
        "fn_name": "HangAPictureFrame",
        "title": "Hang a picture frame properly",
        "h1": "Hang a picture frame properly",
        "saves_headline": "Save £30–60 today",
        "meta_line": "20 mins · Beginner · Saves £30–60 vs a handyperson",
        "meta_title": "Hang a Picture Frame Properly | FixItFirst",
        "meta_desc": "Hang a picture frame straight and securely in 20 minutes. Step-by-step guide covering wall types, fixings, and getting it level. Save £30–60.",
        "before": [
            "Getting a picture to hang straight and stay there requires the right fixing for your wall type. Solid walls (brick or block) need masonry anchors; hollow stud walls need toggle anchors or a screw into a stud.",
            "Always use a cable and pipe detector before drilling. Cables run vertically from sockets and switches; pipes run to radiators and bathrooms.",
        ],
        "tools": [
            ("✓", "Tape measure", "to position the fixing correctly"),
            ("✓", "Spirit level", "to hang it straight"),
            ("✓", "Pencil", "to mark the wall"),
            ("✓", "Hammer or drill", "hammer for picture hooks on solid walls; drill for masonry fixings"),
            ("✓", "Pipe & cable detector", "essential before any drilling"),
            ("!", "Wall fixings", "buy: £2–5 — picture hooks for light frames; wall plugs and screws for heavier ones"),
        ],
        "steps": [
            ("Detect for pipes and cables", "Run the detector over the whole area before marking anything. Cables run up from sockets and switches; pipes run to radiators, bathrooms, and kitchens."),
            ("Choose the right fixing", "Light frames (under 5kg): a picture hook hammered into the wall. Medium frames (5–15kg): a screw into a stud or a hollow-wall anchor. Heavy frames (over 15kg): a masonry screw into a wall plug in solid wall, or two screws into studs."),
            ("Mark the fixing point", "Hold the frame against the wall where you want it. Mark the top centre with a pencil. Measure down to where the wire or hanger sits and mark that point — this is where your fixing goes."),
            ("Drill or hammer your fixing", "For masonry: drill with a masonry bit, push in the wall plug flush, drive the screw. For stud walls: locate the stud with a detector and drive a screw directly. For hollow walls without studs: fit a toggle anchor."),
            ("Use a spirit level", "Hang the frame and place your spirit level on top. Slide the frame left or right on the wire until the bubble is centred. Step back and check from a distance."),
            ("Adjust the hanging point", "If the frame tilts because the wire is off-centre, move the D-rings or adjust the wire anchor points on the back of the frame."),
        ],
        "beginners_wrong": [
            "Drilling without checking for cables — this is a real danger, especially near sockets and switches.",
            "Using the wrong fixing for the wall type — a picture hook in a plasterboard wall will pull straight out under any weight.",
            "Not using a spirit level — what looks straight to the eye is almost always slightly off.",
        ],
        "stop_call_pro": [
            ("You cannot identify the wall construction and the frame is heavy (over 15kg)", True),
            ("The cable detector shows cables exactly where you need to drill", False),
        ],
        "pro_type": "handyperson",
        "cost_rows": [
            ("Picture hooks (light frame)", "£2–3"),
            ("Wall plugs and screws", "£3–6"),
            ("Handyperson would charge", "£30–60"),
        ],
        "learned": "You now know how to choose wall fixings, find joists and studs, and hang things level. These skills transfer to fitting shelves, curtain poles, mirrors, and anything else on a wall.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar to fitting a curtain pole — the measuring and levelling is the main skill",
        "completed_count": 5108,
        "renter_warning": "Most tenancy agreements require written permission before drilling walls. Some landlords are relaxed about picture hooks; others are not. Ask before you drill. Use adhesive strips for lightweight frames to avoid the issue entirely.",
        "guide_tools": ["hammer", "tape-measure", "spirit-level", "cable-detector"],
        "category": "Carpentry",
        "time": "20 mins",
        "cost": "£2–6",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £30–60 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "fix-a-broken-cabinet-hinge",
        "fn_name": "FixABrokenCabinetHinge",
        "title": "Fix a broken cabinet hinge",
        "h1": "Fix a broken cabinet hinge",
        "saves_headline": "Save £30–60 today",
        "meta_line": "20 mins · Beginner · Saves £30–60 vs a carpenter",
        "meta_title": "Fix a Broken Cabinet Hinge | FixItFirst",
        "meta_desc": "Fix a broken or misaligned cabinet hinge in 20 minutes. Step-by-step guide for concealed cup hinges. Save £30–60 vs calling a carpenter.",
        "before": [
            "Most kitchen and bathroom cabinets use concealed cup hinges — the kind with a large round cup pressed into the door. These are designed to be adjusted and replaced without tools beyond a screwdriver.",
            "Before buying a new hinge, try the adjustment screws. Most drooping or misaligned cabinet doors just need a small tweak with a cross-head screwdriver — no new parts required.",
        ],
        "tools": [
            ("✓", "Cross-head screwdriver", "for all hinge screws"),
            ("!", "Replacement hinge", "buy: £2–5 — take the old hinge to match the cup diameter, usually 35mm, and the arm length"),
        ],
        "steps": [
            ("Identify the hinge type", "Modern kitchen cabinets use concealed cup hinges. Older furniture may use butt hinges (flat, visible on the door edge). This guide covers cup hinges — the most common type."),
            ("Try the adjustment screws first", "Every concealed hinge has two or three adjustment screws. The screw closest to the door moves it in and out; the side screw moves it left and right; some have a third for up and down. Try small turns — a quarter-turn makes a visible difference."),
            ("Tighten any loose mounting screws", "Check the screws on the mounting plate (fixed to the cabinet wall) and the cup screws (fixed into the door). A 'broken' hinge is often just loose."),
            ("Remove a damaged hinge", "If the hinge body is cracked or a screw hole is stripped, unscrew the hinge from both the door and the cabinet wall. Take it to a hardware shop to match the cup size (usually 35mm) and arm length."),
            ("Fit the replacement", "Press the cup into the hole in the door and secure with the screws. Clip or screw the arm to the mounting plate. Close the door and check alignment."),
            ("Align to match neighbouring doors", "Use the adjustment screws to align the door so it is parallel with adjacent doors, with even gaps at top, bottom, and sides."),
        ],
        "beginners_wrong": [
            "Buying a replacement before trying the adjustment screws — most sagging doors just need a half-turn.",
            "Buying the wrong cup size — 35mm is standard but not universal. Take the old hinge to match it.",
            "Overtightening — the screws seat into soft MDF in most flat-pack cabinets. Use firm but gentle pressure.",
        ],
        "stop_call_pro": [
            ("The screw holes in the door are completely stripped and the wood is crumbling", True),
            ("Multiple hinges have failed on the same cabinet — may indicate the cabinet is damaged beyond repair", False),
        ],
        "pro_type": "carpenter",
        "cost_rows": [
            ("Adjustment only (no new parts)", "Free"),
            ("Single replacement hinge", "£3–5"),
            ("Set of 2 hinges", "£6–10"),
            ("Carpenter would charge", "£30–60"),
        ],
        "learned": "You now understand how concealed cup hinges work and how to adjust them. This applies to every kitchen, bathroom, and wardrobe cabinet with this hinge type — which is most of them.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Easier than fitting a curtain pole — no drilling required in most cases",
        "completed_count": 2987,
        "renter_warning": "Cabinet hinges in a rented property are the landlord's responsibility to fix. Adjusting hinges is harmless maintenance; replacing a hinge is a minor repair your landlord should fund — report it in writing first.",
        "guide_tools": ["screwdriver-cross"],
        "category": "Carpentry",
        "time": "20 mins",
        "cost": "Free–£10",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £30–60 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
]


# ---------------------------------------------------------------------------
# HELPERS
# ---------------------------------------------------------------------------
def make_tools_jsx(tools):
    lines = []
    for icon, name, note in tools:
        icon_class = "text-green-500" if icon == "✓" else "text-orange-500"
        if icon == "!":
            note_part = f'<span className="text-orange-600">buy: {note}</span>'
        else:
            note_part = note
        lines.append(
            f'            <li className="flex items-start gap-3 text-sm">\n'
            f'              <span className="{icon_class} font-bold mt-0.5 shrink-0">{icon}</span>\n'
            f'              <span><span className="font-medium">{name}</span> — {note_part}</span>\n'
            f'            </li>'
        )
    return "\n".join(lines)


def make_steps_const(steps):
    lines = ["const steps = ["]
    for title, desc in steps:
        t = title.replace("'", "\\'")
        d = desc.replace("'", "\\'")
        lines.append(f"  {{ title: '{t}', description: '{d}' }},")
    lines.append("]")
    return "\n".join(lines)


def make_wrong_jsx(items):
    out = []
    for i, item in enumerate(items):
        mb = " mb-2" if i < len(items) - 1 else ""
        out.append(f'          <p className="text-sm text-yellow-900{mb}">{item}</p>')
    return "\n".join(out)


def make_pro_jsx(items):
    # items is list of (text, has_mb1) tuples or just strings
    out = []
    for i, entry in enumerate(items):
        if isinstance(entry, tuple):
            text, has_mb = entry
        else:
            text = entry
            has_mb = i < len(items) - 1
        mb = " mb-1" if has_mb else ""
        out.append(f'          <p className="text-sm text-red-900{mb}">{text}</p>')
    return "\n".join(out)


def make_cost_jsx(rows):
    lines = []
    for i, (label, amount) in enumerate(rows):
        is_last = i == len(rows) - 1
        if is_last:
            lines.append(
                f'            <div className="flex justify-between py-2">'
                f'<span className="text-gray-600">{label}</span>'
                f'<span className="font-medium text-red-600">{amount}</span></div>'
            )
        else:
            lines.append(
                f'            <div className="flex justify-between py-2 border-b border-gray-200">'
                f'<span className="text-gray-600">{label}</span>'
                f'<span className="font-medium">{amount}</span></div>'
            )
    return "\n".join(lines)


def make_page_tsx(g):
    slug = g["slug"]
    pro_type = g["pro_type"]
    stop_title = f"Stop and call a {pro_type} if..."

    tools_jsx = make_tools_jsx(g["tools"])
    steps_const = make_steps_const(g["steps"])
    wrong_jsx = make_wrong_jsx(g["beginners_wrong"])
    pro_jsx = make_pro_jsx(g["stop_call_pro"])
    cost_jsx = make_cost_jsx(g["cost_rows"])

    before_paras = "\n".join(
        f'          <p className="text-sm text-gray-700 mb-2">{p}</p>' for p in g["before"]
    )

    if g.get("guide_tools"):
        tools_warning = f"        <ToolsWarning requiredToolIds={{GUIDE_TOOLS['{slug}']}} />"
    else:
        tools_warning = f"        {{/* No tracked tools for this guide */}}"

    renter_block = ""
    if g.get("renter_warning"):
        rw = g["renter_warning"].replace("'", "\\'")
        renter_block = f"""        {{GUIDE_META['{slug}'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{{GUIDE_META['{slug}'].renterWarning}}</p>
          </div>
        )}}"""

    return f"""import type {{ Metadata }} from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import ToolsWarning from '@/components/ToolsWarning'
import {{ GUIDE_TOOLS }} from '@/lib/tools'
import RecentViewTracker from '@/components/RecentViewTracker'
import SocialShare from '@/components/SocialShare'
import GuideExtras from '@/components/GuideExtras'
import PrintButton from '@/components/PrintButton'
import NextGuide from '@/components/NextGuide'
import DifficultyComparison from '@/components/DifficultyComparison'
import {{ GUIDE_META }} from '@/lib/guide-meta'

export const metadata: Metadata = {{
  title: '{g["meta_title"]}',
  description: '{g["meta_desc"]}',
}}

{steps_const}

export default function {g["fn_name"]}() {{
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{g["h1"]}</h1>
        <p className="text-4xl font-black text-green-600 mb-1">{g["saves_headline"]}</p>
        <p className="text-gray-500 mb-6">{g["meta_line"]}</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {{GUIDE_META['{slug}'].lastUpdated}}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="{g["title"]}" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="{slug}" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
{before_paras}
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
{tools_jsx}
          </ul>
        </div>
{tools_warning}
        <StepProgress steps={{steps}} slug="{slug}" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
{wrong_jsx}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">{stop_title}</h2>
{pro_jsx}
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
{cost_jsx}
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">{g["learned"]}</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {{GUIDE_META['{slug}'].completedCount.toLocaleString()}} people</p>
{renter_block}
        <CompleteButton />
        <GuideExtras slug="{slug}" />
        <NextGuide currentSlug="{slug}" />
      </div>
      <RecentViewTracker slug="{slug}" title="{g["title"]}" href="/guides/{slug}" />
      <MobileNav />
    </main>
  )
}}
"""


# ---------------------------------------------------------------------------
# LIB UPDATES
# ---------------------------------------------------------------------------
def guide_meta_entry(g):
    slug = g["slug"]
    lines = [
        f"  '{slug}': {{",
        f"    lastUpdated: '{g['last_updated']}',",
        f"    difficultyComparison: '{g['difficulty_comparison']}',",
        f"    completedCount: {g['completed_count']},",
    ]
    rw = g.get("renter_warning", "")
    if rw:
        lines.append(f"    renterWarning: '{rw.replace(chr(39), chr(92)+chr(39))}',")
    lines.append("  },")
    return "\n".join(lines)


def guides_ts_entry(g):
    slug = g["slug"]
    uk = ", ukSpecific: true" if g["uk_specific"] else ""
    qw = ", quickWin: true" if g["quick_win"] else ""
    return (
        f"  {{ slug: '{slug}', title: '{g['title']}', time: '{g['time']}', cost: '{g['cost']}', "
        f"level: '{g['level']}', category: '{g['category']}', href: '/guides/{slug}', "
        f"difficulty: {g['difficulty']}, saves: '{g['saves']}'{uk}{qw}, skillPoints: {g['skill_points']} }},"
    )


def guide_tools_entry(g):
    slug = g["slug"]
    tools = g["guide_tools"]
    if not tools:
        return f"  '{slug}': [],"
    tools_str = ", ".join(f"'{t}'" for t in tools)
    return f"  '{slug}': [{tools_str}],"


def guides_page_entry(g):
    slug = g["slug"]
    return (
        f"  {{ title: '{g['title']}', time: '{g['time']}', cost: '{g['cost']}', "
        f"level: '{g['level']}', category: '{g['category']}', href: '/guides/{slug}', "
        f"saves: '{g['saves']}', difficulty: {g['difficulty']} }},"
    )


# ---------------------------------------------------------------------------
# MAIN
# ---------------------------------------------------------------------------
BASE = "/home/user/fixitfirst"

for g in GUIDES:
    slug = g["slug"]
    out_dir = os.path.join(BASE, "app", "guides", slug)
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "page.tsx"), "w") as f:
        f.write(make_page_tsx(g))
    print(f"  ✓ {slug}")

# guide-meta.ts
meta_path = os.path.join(BASE, "lib", "guide-meta.ts")
with open(meta_path) as f:
    src = f.read()
new_entries = "\n".join(guide_meta_entry(g) for g in GUIDES)
src = src.rstrip()
assert src.endswith("}")
src = src[:-1].rstrip() + "\n" + new_entries + "\n}\n"
with open(meta_path, "w") as f:
    f.write(src)
print("  ✓ lib/guide-meta.ts")

# guides.ts
guides_path = os.path.join(BASE, "lib", "guides.ts")
with open(guides_path) as f:
    src = f.read()
new_entries = "\n".join(guides_ts_entry(g) for g in GUIDES)
src = src.rstrip()
assert src.endswith("]")
src = src[:-1].rstrip() + "\n" + new_entries + "\n]\n"
with open(guides_path, "w") as f:
    f.write(src)
print("  ✓ lib/guides.ts")

# tools.ts
tools_path = os.path.join(BASE, "lib", "tools.ts")
with open(tools_path) as f:
    src = f.read()
new_entries = "\n".join(guide_tools_entry(g) for g in GUIDES)
marker = "export const TOOLS_STORAGE_KEY"
idx = src.find(marker)
assert idx != -1
insert_before = src.rfind("}", 0, idx)
src = src[:insert_before] + "\n" + new_entries + "\n" + src[insert_before:]
with open(tools_path, "w") as f:
    f.write(src)
print("  ✓ lib/tools.ts")

# app/guides/page.tsx
gp_path = os.path.join(BASE, "app", "guides", "page.tsx")
with open(gp_path) as f:
    src = f.read()
new_entries = "\n".join(guides_page_entry(g) for g in GUIDES)
marker2 = "export default function GuidesPage"
idx2 = src.find(marker2)
assert idx2 != -1
insert_before2 = src.rfind("]", 0, idx2)
src = src[:insert_before2] + "\n" + new_entries + "\n" + src[insert_before2:]
with open(gp_path, "w") as f:
    f.write(src)
print("  ✓ app/guides/page.tsx")

print("\nDone.")
