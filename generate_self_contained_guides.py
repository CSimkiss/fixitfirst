#!/usr/bin/env python3
"""Rewrite 9 guide pages as self-contained pages (no external component imports)."""

import os

BASE = "/home/user/fixitfirst"

# ---------------------------------------------------------------------------
# GUIDE DATA
# ---------------------------------------------------------------------------

GUIDES = [
    # ---- ELECTRICS ----
    {
        "slug": "replace-a-plug-fuse",
        "fn":   "ReplaceAPlugFuse",
        "title": "Replace a plug fuse",
        "meta_title": "Replace a Plug Fuse | FixItFirst",
        "meta_desc":  "Replace a plug fuse in 5 minutes. Step-by-step UK guide — covers fuse ratings, how to test a fuse, and what to do if it blows again. Save £30–60.",
        "subtitle": "5 mins · Beginner · Saves £30–60 vs an electrician",
        "saves": "Save £30–60 today",
        "before": [
            "UK plugs contain a small cartridge fuse. When an appliance suddenly goes dead, the plug fuse is the first thing to check — it costs £1 and takes 2 minutes.",
            "This guide works for any standard UK 3-pin plug. If the appliance trips the whole circuit instead of just going dead, see the circuit breaker guide.",
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
        "wrong": [
            "Fitting a higher-rated fuse to stop it blowing — a 13A fuse in a lamp is a fire risk. Always match the rating.",
            "Not investigating why it blew — if the new fuse blows immediately, the appliance is faulty. Stop using it.",
            "Opening a plug that is still in the socket — always unplug first.",
        ],
        "call_pro": "Stop and call an electrician if...",
        "pro_items": [
            "The new fuse blows immediately — the appliance is faulty; stop using it",
            "There are scorch marks inside the plug or on the cable",
            "The cable is damaged or the wires are exposed",
        ],
        "cost_rows": [
            ("Replacement fuse", "£1–3"),
            ("Pack of spare fuses", "£3–5"),
            ("Electrician call-out", "£30–60", True),
        ],
        "learned": "You now know how UK plug fuses work, how to match fuse ratings to appliances, and how to diagnose a blown fuse. This applies to every plug-top appliance in your home.",
    },
    {
        "slug": "reset-a-tripped-circuit-breaker",
        "fn":   "ResetATrippedCircuitBreaker",
        "title": "Reset a tripped circuit breaker",
        "meta_title": "Reset a Tripped Circuit Breaker | FixItFirst",
        "meta_desc":  "Reset a tripped circuit breaker in 10 minutes. Step-by-step guide to your consumer unit — covers overloads, faults, and RCD trips. Save £40–60.",
        "subtitle": "10 mins · Beginner · Saves £40–60 vs an electrician",
        "saves": "Save £40–60 today",
        "before": [
            "A tripped breaker is your home's electrical safety system doing its job — it cut the power to protect you from an overload or fault. Resetting it takes seconds once you know why it tripped.",
            "Your consumer unit (fuse box) is usually in a hallway, under the stairs, or in the kitchen. It is the grey or white box with rows of switches.",
        ],
        "tools": [
            ("✓", "Nothing needed", "everything is already in your consumer unit"),
        ],
        "steps": [
            ("Find the consumer unit", "Open the cover of your consumer unit. Look for a breaker that has tripped to the middle or off position — it will be out of line with the others."),
            ("Identify the circuit", "The breakers are usually labelled — upstairs sockets, downstairs lights, etc. Knowing which one tripped tells you where to look for the cause."),
            ("Reduce the load first", "If the breaker tripped due to overload (too many appliances on one circuit), unplug several items from that circuit before resetting."),
            ("Reset the breaker", "Push the switch firmly all the way to off, then back up to on. It should click and stay in the on position."),
            ("Test the circuit", "Turn on a light or plug in one appliance to confirm power is restored on that circuit."),
            ("If it trips again", "Unplug every appliance on that circuit one at a time, then reset. When the breaker stays up with one item unplugged, that item is faulty — do not use it."),
        ],
        "wrong": [
            "Resetting without removing the cause — if you are overloading the circuit, it will just trip again.",
            "Ignoring a breaker that trips repeatedly — this indicates a faulty appliance or a wiring fault. Do not force it on.",
            "Confusing the main switch with a circuit breaker — the main switch controls all power; individual breakers control one circuit each.",
        ],
        "call_pro": "Stop and call an electrician if...",
        "pro_items": [
            "The breaker trips immediately every time you reset it with nothing plugged in",
            "There is a burning smell or scorch marks near the consumer unit",
            "The RCD (the wider switch labelled with a T or test button) keeps tripping — this indicates an earth fault",
        ],
        "cost_rows": [
            ("Resetting a tripped breaker", "Free"),
            ("Replacing a faulty appliance", "Varies"),
            ("Electrician to investigate a fault", "£40–60", True),
        ],
        "learned": "You now know how your consumer unit works, how to identify which circuit has tripped, and how to safely restore power. This knowledge also helps you isolate circuits safely before doing any electrical work.",
    },
    {
        "slug": "replace-a-light-switch",
        "fn":   "ReplaceALightSwitch",
        "title": "Replace a light switch",
        "meta_title": "Replace a Light Switch | FixItFirst",
        "meta_desc":  "Replace a light switch in 30 minutes. Step-by-step UK guide covering wiring, safety, and fitting — with no electrician required. Save £60–100.",
        "subtitle": "30 mins · Beginner · Saves £60–100 vs an electrician",
        "saves": "Save £60–100 today",
        "before": [
            "Replacing a decorative light switch faceplate is one of the simplest electrical jobs — the wiring stays the same, you are just changing the cover.",
            "Always turn off the power at the consumer unit and confirm it is off before touching any wires. Never work on a live circuit.",
        ],
        "tools": [
            ("✓", "Flat-head and cross-head screwdrivers", "to remove the old plate and connect the new one"),
            ("✓", "Phone or camera", "to photograph the wiring before disconnecting anything"),
            ("!", "Replacement light switch", "buy: £3–15 — match the number of gangs (switching positions) to your existing switch"),
        ],
        "steps": [
            ("Turn off the power at the consumer unit", "Find the lighting circuit breaker for this room and switch it off. Test the light to confirm the power is off."),
            ("Remove the old switch plate", "Undo the two screws on the face plate. Gently ease it away from the wall — the wires are still connected behind it."),
            ("Photograph the wiring", "Before touching anything, take a clear photo showing exactly which wire goes to which terminal. This is your reference."),
            ("Disconnect the wires", "Loosen each terminal screw and pull the wire free. Note the terminal labels — COM (common), L1, L2."),
            ("Connect the new switch", "Using your photo as a guide, reconnect each wire to the matching terminal on the new switch. Tighten each terminal screw firmly."),
            ("Fit and test", "Fold the wires carefully back into the backbox, screw the new plate in, restore power at the consumer unit, and test the switch."),
        ],
        "wrong": [
            "Working without turning off the power — always isolate at the consumer unit and confirm it is off.",
            "Not photographing the wiring before disconnecting — it is very easy to forget which wire went where.",
            "Leaving wires loose in the terminals — each wire must be clamped firmly so it cannot pull free.",
        ],
        "call_pro": "Stop and call an electrician if...",
        "pro_items": [
            "There are more wires than expected — you may have a two-way or intermediate switching circuit",
            "Any wires are burnt, melted, or have damaged insulation",
            "The backbox is cracked or the wall around it is damaged",
        ],
        "cost_rows": [
            ("New switch faceplate", "£3–15"),
            ("With backbox replacement", "£8–20"),
            ("Electrician would charge", "£60–100", True),
        ],
        "learned": "You now know how a single-gang light switch is wired and how to swap a faceplate safely. This transfers directly to replacing plug sockets, dimmer switches, and USB outlets.",
    },
    {
        "slug": "fix-a-doorbell",
        "fn":   "FixADoorbell",
        "title": "Fix a doorbell",
        "meta_title": "Fix a Doorbell | FixItFirst",
        "meta_desc":  "Fix a broken doorbell in 30 minutes. Step-by-step guide covering batteries, the button, wiring, and wireless upgrades. Save £40–80.",
        "subtitle": "30 mins · Beginner · Saves £40–80 vs a tradesperson",
        "saves": "Save £40–80 today",
        "before": [
            "Most doorbell faults are caused by flat batteries, a corroded button, or a loose wire — all quick and cheap to fix.",
            "Start with the batteries and work outward. Do not replace the whole unit before you have checked the simple causes.",
        ],
        "tools": [
            ("!", "Replacement batteries", "buy: £2–4 — check the chime unit for the battery type before buying"),
            ("✓", "Small screwdriver", "to remove the button from the wall"),
            ("!", "Replacement button (if needed)", "buy: £5–12 — match the voltage (most are 8–12V AC or wireless)"),
        ],
        "steps": [
            ("Replace the batteries first", "Open the chime unit inside your home. Replace all batteries with fresh ones and test. This solves most doorbell faults."),
            ("Inspect the button outside", "Unscrew the button from the wall — usually two small screws. Look at the two wire terminals. Clean any green corrosion with a dry cloth or fine sandpaper."),
            ("Test the button directly", "With the button removed, briefly touch the two wires together for a second. If the chime sounds, the button is the fault — replace it."),
            ("Replace the button if faulty", "Take the old button to a hardware shop to match the style. Connect the two wires to the terminals on the new button (polarity does not matter) and screw it back."),
            ("Check the wiring", "Trace the wire from the button to the chime unit. Look for breaks, sharp kinks, or loose connections at either end."),
            ("Consider a wireless upgrade", "If the wiring is old or hidden in the wall and unreliable, a wireless doorbell (£15–25) eliminates it altogether and takes 10 minutes to fit."),
        ],
        "wrong": [
            "Replacing the whole chime unit before checking the batteries and button — 90% of faults are in one of those two places.",
            "Forgetting that the button has low-voltage wires — these are safe to touch, but make sure the transformer is not the culprit too.",
            "Not cleaning the button contacts — corrosion on the terminals is a very common cause of intermittent faults.",
        ],
        "call_pro": "Stop and call an electrician if...",
        "pro_items": [
            "There is no transformer and you cannot trace where the doorbell gets its power from",
            "You find 240V mains wiring connected to the doorbell circuit",
            "The chime unit is hard-wired and you are unsure how to replace it safely",
        ],
        "cost_rows": [
            ("New batteries", "£2–4"),
            ("Replacement button", "£5–12"),
            ("Wireless doorbell kit", "£15–25"),
            ("Electrician would charge", "£40–80", True),
        ],
        "learned": "You now know how wired doorbells work, how to fault-find from the simplest fix outward, and when a wireless replacement makes more sense than a repair.",
    },
    # ---- CARPENTRY ----
    {
        "slug": "fix-a-squeaky-floorboard",
        "fn":   "FixASqueakyFloorboard",
        "title": "Fix a squeaky floorboard",
        "meta_title": "Fix a Squeaky Floorboard | FixItFirst",
        "meta_desc":  "Fix a squeaky floorboard in 20 minutes with a screw. Step-by-step beginner guide. Save £40–60 vs calling a carpenter.",
        "subtitle": "20 mins · Beginner · Saves £40–60 vs a carpenter",
        "saves": "Save £40–60 today",
        "before": [
            "Squeaky floorboards are caused by the board rubbing against a joist or a neighbouring board as it flexes. Screwing the board down tight stops the movement and kills the squeak.",
            "Always use a pipe and cable detector before drilling into a floor. Pipes and cables run under floors — particularly near bathrooms, kitchens, and walls.",
        ],
        "tools": [
            ("✓", "Pipe and cable detector", "essential before screwing into a floor — available to hire if you do not own one"),
            ("✓", "Drill or screwdriver", "to drive the screw"),
            ("!", "50mm wood screws", "buy: £1–3 — countersinking screws are ideal"),
            ("!", "Wood filler", "buy: £3–5 — if the floor is visible and you want a neat finish"),
        ],
        "steps": [
            ("Find and mark the squeak", "Walk slowly across the board and mark the squeaky area with a small piece of tape."),
            ("Check for pipes and cables", "Run a cable/pipe detector across the full length of the board before drilling. Cables run vertically from sockets and switches; pipes run to radiators and bathrooms."),
            ("Find the joist", "Knock along the board with your knuckle. A dull, solid sound means there is a joist below; a hollow sound means there is not. Joists are typically spaced 400mm apart."),
            ("Drill a pilot hole", "Drill a pilot hole through the board into the joist below — use a bit slightly narrower than your screw shank. This prevents the board splitting."),
            ("Drive the screw", "Drive a 50mm wood screw through the pilot hole. The screw should pull the board firmly down onto the joist. Drive the head just below the surface."),
            ("Fill and finish", "Fill the screw hole with wood filler if the floor is exposed. Allow to dry, sand flush, and touch up with floor paint or varnish if needed."),
        ],
        "wrong": [
            "Screwing without checking for cables and pipes first — this is the most dangerous mistake on this job.",
            "Screwing between joists — the board just flexes and squeaks again. You must hit the joist.",
            "Using screws that are too short — they need to go at least 25mm into the joist to hold.",
        ],
        "call_pro": "Stop and call a carpenter if...",
        "pro_items": [
            "The board has significant bounce or flex — this may indicate a damaged joist",
            "There is damp, rot, or discolouration visible when you inspect the board",
            "You cannot locate the joist and the squeak is in a bathroom or kitchen",
        ],
        "cost_rows": [
            ("Wood screws only", "£2–3"),
            ("Screws and filler", "£5–8"),
            ("Carpenter would charge", "£40–60", True),
        ],
        "learned": "You now know how floorboards and joists relate, how to locate a joist by sound, and how to safely screw into a floor. This transfers to fitting skirting boards and laying new flooring.",
    },
    {
        "slug": "fix-a-sticking-door",
        "fn":   "FixAStickingDoor",
        "title": "Fix a sticking door",
        "meta_title": "Fix a Sticking Door | FixItFirst",
        "meta_desc":  "Fix a sticking door in 45 minutes without calling anyone. Covers hinge tightening, lubrication, and sanding. Save £50–80 vs a carpenter.",
        "subtitle": "45 mins · Beginner · Saves £50–80 vs a carpenter",
        "saves": "Save £50–80 today",
        "before": [
            "Most sticking doors are caused by loose hinges, seasonal wood swelling, or the house settling. Start with the hinges — a loose top hinge causes most sticking and takes 30 seconds to fix.",
            "Do this repair in dry weather if you can. Wood swells in damp weather, so a door that sticks badly in winter may be fine in summer and vice versa.",
        ],
        "tools": [
            ("✓", "Cross-head screwdriver", "to tighten hinge screws"),
            ("✓", "Candle or bar of soap", "for lubrication — often solves minor sticking"),
            ("!", "Sandpaper 80-grit", "buy: £2–4 — for sanding back a sticking edge"),
            ("!", "Wood primer and paint", "buy: £5–12 — to seal sanded wood afterwards"),
        ],
        "steps": [
            ("Find exactly where it sticks", "Close the door slowly and watch and feel for where it drags. Mark the sticking point with a pencil on the door edge."),
            ("Check and tighten the hinges", "Look at both hinges — top and bottom. Check every screw. Tighten any that are loose. A dropped top hinge is the most common cause of a sticking door."),
            ("Lubricate the edge", "Rub a candle or bar of soap along the marked sticking area. Open and close the door several times. This often solves minor sticking without any sanding."),
            ("Sand the sticking area", "If lubrication alone does not work, sand back the marked area with 80-grit paper, working in the direction of the grain. Remove a small amount and test."),
            ("Test after each pass", "Re-hang the door and test before sanding more. You want it just free — not loose."),
            ("Seal the bare wood", "Bare sanded wood absorbs moisture and will swell and stick again. Prime and paint or varnish any area you have sanded before the week is out."),
        ],
        "wrong": [
            "Removing the door and planing it flat before checking the hinges — this is unnecessary 80% of the time.",
            "Sanding too much in one pass — remove a little, test, repeat.",
            "Not sealing the sanded wood — unpainted wood swells and the door sticks again within weeks.",
        ],
        "call_pro": "Stop and call a carpenter if...",
        "pro_items": [
            "The door frame itself is visibly warped or out of square",
            "The sticking is at the top of the door and tightening hinges has not helped — the lintel may have dropped",
            "The door is fire-rated — do not alter the fit without checking building regulations",
        ],
        "cost_rows": [
            ("Sandpaper and paint", "£7–16"),
            ("If you already have tools", "Free–£3"),
            ("Carpenter would charge", "£50–80", True),
        ],
        "learned": "You now know how hinges affect door alignment and how to read where a door is sticking. These skills apply to any door in the house — and to fitting a new door if needed.",
    },
    {
        "slug": "fix-a-sticking-drawer",
        "fn":   "FixAStickingDrawer",
        "title": "Fix a sticking drawer",
        "meta_title": "Fix a Sticking Drawer | FixItFirst",
        "meta_desc":  "Fix a sticking drawer in 15 minutes with wax or sandpaper. Step-by-step beginner guide. Save £30–50 vs a carpenter.",
        "subtitle": "15 mins · Beginner · Saves £30–50 vs a carpenter",
        "saves": "Save £30–50 today",
        "before": [
            "Drawers stick because of friction between the drawer sides and the runner. In most cases, wax from a candle applied to the runners fixes it in under five minutes.",
            "Wooden drawer systems are more prone to swelling than metal-runner systems. If the sticking is seasonal (worse in summer or after wet weather), waxing is almost always the answer.",
        ],
        "tools": [
            ("✓", "Candle or dry soap bar", "the best lubricant for wooden runners — free if you have either at home"),
            ("✓", "Dry cloth", "to clean the runners before applying wax"),
            ("!", "Sandpaper 120-grit", "buy: £2–3 — only needed if wax alone does not solve it"),
        ],
        "steps": [
            ("Pull the drawer out completely", "Remove it fully so you can inspect the runners and the sides of the drawer box."),
            ("Clean the runners", "Wipe the wooden or metal runners inside the cabinet, and the sides and bottom edges of the drawer, with a dry cloth. Remove any grit, crumbs, or old wax build-up."),
            ("Check the runners for damage", "Look for splinters on wooden runners, or bent sections on metal runners. Bent metal runners can often be straightened carefully with pliers."),
            ("Wax the runners", "Rub a candle or dry bar of soap along the wooden runners and the sides of the drawer. Cover the full length. This is the most effective fix for wooden drawer systems."),
            ("Replace and test", "Slide the drawer back in and test. It should move smoothly. If still stiff, apply more wax and test again."),
            ("Sand if still sticking", "If wax does not fully solve it, lightly sand the sides of the drawer with 120-grit paper — a few strokes per side. Test after each pass. Seal with wood varnish when done."),
        ],
        "wrong": [
            "Using wet lubricants like WD-40 on wooden runners — it soaks in and can cause more swelling.",
            "Sanding without cleaning first — grit and crumbs under the drawer cause most of the friction.",
            "Over-sanding — remove a little at a time and test.",
        ],
        "call_pro": "Stop and call a carpenter if...",
        "pro_items": [
            "The drawer base or sides are cracked or have pulled apart at the joints",
            "The cabinet frame itself is warped or leaning",
        ],
        "cost_rows": [
            ("Wax (candle) only", "Free"),
            ("With sandpaper", "£2–3"),
            ("Carpenter would charge", "£30–50", True),
        ],
        "learned": "You now understand why wooden drawers stick and the correct sequence for fixing them. These same techniques apply to sash windows, wardrobe doors, and any other wood-on-wood sliding joint.",
    },
    {
        "slug": "hang-a-picture-frame",
        "fn":   "HangAPictureFrame",
        "title": "Hang a picture frame properly",
        "meta_title": "How to Hang a Picture Frame | FixItFirst",
        "meta_desc":  "Hang a picture frame straight and securely in 20 minutes. Covers wall types, fixing choice, and levelling. Save £30–60 vs a handyperson.",
        "subtitle": "20 mins · Beginner · Saves £30–60 vs a handyperson",
        "saves": "Save £30–60 today",
        "before": [
            "The right fixing depends on your wall type and the weight of the frame. Get this wrong and the frame falls off the wall — get it right and it stays for years.",
            "Solid walls (brick or block) need a wall plug and screw. Stud partition walls need a screw into a stud or a toggle anchor. Always check for cables and pipes before drilling.",
        ],
        "tools": [
            ("✓", "Pipe and cable detector", "essential before drilling — do not skip this step"),
            ("✓", "Spirit level", "for getting the frame straight"),
            ("✓", "Tape measure and pencil", "to mark the fixing point accurately"),
            ("!", "Wall plugs and screws", "buy: £2–5 — choose a size rated for the frame weight"),
            ("!", "Drill and masonry bit", "buy or hire — needed for solid walls"),
        ],
        "steps": [
            ("Detect for pipes and cables", "Run the detector over the whole area before marking anything. Cables run up from sockets and switches; pipes run to radiators, bathrooms, and kitchens."),
            ("Choose the right fixing", "Light frames under 5kg: a picture hook. Medium 5–15kg: screw into a stud or hollow-wall anchor. Heavy over 15kg: masonry screw into a wall plug in solid wall."),
            ("Mark the fixing point", "Hold the frame against the wall where you want it. Mark the top centre with a pencil. Measure down to where the wire or hanger sits — this is where your fixing goes."),
            ("Drill or hammer your fixing", "For masonry: drill with a masonry bit, push in the wall plug flush, drive the screw. For stud walls: locate the stud and drive a screw directly. For hollow walls without studs: fit a toggle anchor."),
            ("Use a spirit level", "Hang the frame and place your spirit level on top. Slide the frame left or right on the wire until the bubble is centred."),
            ("Adjust the hanging point", "If the frame tilts because the wire is off-centre, move the D-rings or adjust the wire anchor points on the back of the frame."),
        ],
        "wrong": [
            "Not checking for cables and pipes before drilling — this is essential.",
            "Using a picture hook rated for 2kg to hang a heavy mirror — check the weight and match the fixing.",
            "Not measuring the drop from the top of the frame to the wire — the screw needs to go at the wire position, not the top of the frame.",
        ],
        "call_pro": "Stop and call a handyperson if...",
        "pro_items": [
            "The frame is a very heavy mirror over 20kg — use two fixings and make sure both are in studs or solid masonry",
            "You are drilling into a chimney breast and are unsure of what is inside",
        ],
        "cost_rows": [
            ("Wall plugs and screws", "£2–5"),
            ("Picture hooks", "£1–3"),
            ("Handyperson would charge", "£30–60", True),
        ],
        "learned": "You now know how to match a fixing to a wall type and frame weight, and how to hang a frame straight first time. This applies to everything mounted on walls — mirrors, shelves, and TV brackets.",
    },
    {
        "slug": "fix-a-broken-cabinet-hinge",
        "fn":   "FixABrokenCabinetHinge",
        "title": "Fix a broken cabinet hinge",
        "meta_title": "Fix a Broken Cabinet Hinge | FixItFirst",
        "meta_desc":  "Fix a broken or misaligned cabinet hinge in 20 minutes. Covers concealed cup hinges, adjustment screws, and replacement. Save £30–60.",
        "subtitle": "20 mins · Beginner · Saves £30–60 vs a carpenter",
        "saves": "Save £30–60 today",
        "before": [
            "Modern kitchen cabinets use concealed cup hinges that have three adjustment screws — most door alignment problems can be fixed without any tools, just a screwdriver.",
            "Before buying a replacement hinge, try the adjustment screws first. A door that droops, catches, or will not close properly is usually a 30-second adjustment, not a replacement.",
        ],
        "tools": [
            ("✓", "Cross-head screwdriver", "for all hinge adjustments and replacements"),
            ("!", "Replacement hinge (if needed)", "buy: £2–8 — bring the old one to match the cup size (usually 35mm) and arm length"),
        ],
        "steps": [
            ("Identify the hinge type", "Modern kitchen cabinets use concealed cup hinges. Older furniture may use butt hinges (flat, visible on the door edge). This guide covers cup hinges — the most common type."),
            ("Try the adjustment screws first", "Every concealed hinge has two or three adjustment screws. The screw closest to the door moves it in and out; the side screw moves it left and right. Try small turns — a quarter-turn makes a visible difference."),
            ("Tighten any loose mounting screws", "Check the screws on the mounting plate (fixed to the cabinet wall) and the cup screws (fixed into the door). A broken hinge is often just a loose one."),
            ("Remove a damaged hinge", "If the hinge body is cracked or a screw hole is stripped, unscrew it from both the door and the cabinet. Take it to a hardware shop to match the cup size and arm length."),
            ("Fit the replacement", "Press the cup into the hole in the door and secure with the screws. Clip or screw the arm to the mounting plate. Close the door and check alignment."),
            ("Align to match neighbouring doors", "Use the adjustment screws to align the door so it is parallel with adjacent doors, with even gaps at top, bottom, and sides."),
        ],
        "wrong": [
            "Replacing the hinge before trying the adjustment screws — most misalignment is adjustable without any replacement.",
            "Buying the wrong replacement — cup hinges come in different sizes and overlay amounts. Take the old hinge with you.",
            "Overtightening the cup screws into a stripped hole — fill the hole with wooden matchsticks and PVA glue, let it set, then re-drive the screws.",
        ],
        "call_pro": "Stop and call a carpenter if...",
        "pro_items": [
            "The cabinet carcass is split, warped, or the hinge plate has pulled the wood away",
            "Multiple hinges on multiple doors have failed — the cabinet may be poorly fitted or the carcass is moving",
        ],
        "cost_rows": [
            ("Adjustment only", "Free"),
            ("Replacement hinge", "£2–8"),
            ("Full set for a kitchen cabinet", "£8–20"),
            ("Carpenter would charge", "£30–60", True),
        ],
        "learned": "You now know how concealed hinges adjust and how to replace one in minutes. This applies to every kitchen cabinet, wardrobe, and fitted furniture door in your home.",
    },
]

# ---------------------------------------------------------------------------
# PAGE TEMPLATE
# ---------------------------------------------------------------------------

def tool_li(icon, name, note):
    if icon == "!":
        colour = "text-orange-500"
        note_html = f'<span className="text-orange-600">{note}</span>'
    else:
        colour = "text-green-500"
        note_html = note
    return (
        f'            <li className="flex items-start gap-3 text-sm">\n'
        f'              <span className="{colour} font-bold mt-0.5 shrink-0">{icon}</span>\n'
        f'              <span><span className="font-medium">{name}</span> — {note_html}</span>\n'
        f'            </li>'
    )

def step_li(n, title, desc):
    return (
        f'            <li className="flex gap-4">\n'
        f'              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">{n}</span>\n'
        f'              <div>\n'
        f'                <p className="font-semibold text-gray-900 mb-1">{title}</p>\n'
        f'                <p className="text-sm text-gray-600">{desc}</p>\n'
        f'              </div>\n'
        f'            </li>'
    )

def cost_row(label, amount, last=False):
    if last:
        return (
            f'            <div className="flex justify-between py-2">'
            f'<span className="text-gray-600">{label}</span>'
            f'<span className="font-medium text-red-600">{amount}</span></div>'
        )
    return (
        f'            <div className="flex justify-between py-2 border-b border-gray-200">'
        f'<span className="text-gray-600">{label}</span>'
        f'<span className="font-medium">{amount}</span></div>'
    )

def make_page(g):
    tools_jsx = "\n".join(tool_li(*t) for t in g["tools"])
    steps_jsx = "\n".join(step_li(i+1, *s) for i, s in enumerate(g["steps"]))
    wrong_jsx = "\n".join(
        f'          <p className="text-sm text-yellow-900{"" if i == len(g["wrong"])-1 else " mb-2"}">{w}</p>'
        for i, w in enumerate(g["wrong"])
    )
    pro_jsx = "\n".join(
        f'          <p className="text-sm text-red-900{"" if i == len(g["pro_items"])-1 else " mb-1"}">{p}</p>'
        for i, p in enumerate(g["pro_items"])
    )
    cost_jsx = "\n".join(
        cost_row(r[0], r[1], len(r) > 2 and r[2])
        for r in g["cost_rows"]
    )
    before_jsx = "\n".join(
        f'          <p className="text-sm text-gray-700{"" if i == len(g["before"])-1 else " mb-2"}">{p}</p>'
        for i, p in enumerate(g["before"])
    )

    return f"""import type {{ Metadata }} from 'next'

export const metadata: Metadata = {{
  title: '{g["meta_title"]}',
  description: '{g["meta_desc"]}',
}}

export default function {g["fn"]}() {{
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500 mr-8">FixItFirst</a>
        <div className="ml-auto">
          <a href="/guides" className="text-sm text-gray-500 hover:text-orange-500">← All guides</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{g["title"]}</h1>
        <p className="text-4xl font-black text-green-600 mb-1">{g["saves"]}</p>
        <p className="text-gray-500 mb-8">{g["subtitle"]}</p>

        {{/* Before you start */}}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
{before_jsx}
        </div>

        {{/* Tools needed */}}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
{tools_jsx}
          </ul>
        </div>

        {{/* Steps */}}
        <div className="mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <ol className="space-y-5">
{steps_jsx}
          </ol>
        </div>

        {{/* Where beginners go wrong */}}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
{wrong_jsx}
        </div>

        {{/* Stop and call a pro */}}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">{g["call_pro"]}</h2>
{pro_jsx}
        </div>

        {{/* Cost breakdown */}}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
{cost_jsx}
          </div>
        </div>

        {{/* What you just learned */}}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">{g["learned"]}</p>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Ready for another fix?</p>
          <a href="/guides" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Browse all guides →
          </a>
        </div>
      </div>
    </main>
  )
}}
"""

# ---------------------------------------------------------------------------
# WRITE PAGES
# ---------------------------------------------------------------------------

for g in GUIDES:
    out_dir = os.path.join(BASE, "app", "guides", g["slug"])
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "page.tsx"), "w") as f:
        f.write(make_page(g))
    print(f"  ✓ {g['slug']}")

# ---------------------------------------------------------------------------
# UPDATE HOMEPAGE guides array
# ---------------------------------------------------------------------------

NEW_HOME_GUIDES = [
    '  { title: "Replace a plug fuse",              time: "5 mins",  cost: "£1–3",   level: "Beginner", category: "Electrics",  href: "/guides/replace-a-plug-fuse",              difficulty: 1, saves: "Save £30–60 today" },',
    '  { title: "Reset a tripped circuit breaker",  time: "10 mins", cost: "Free",   level: "Beginner", category: "Electrics",  href: "/guides/reset-a-tripped-circuit-breaker",  difficulty: 1, saves: "Save £40–60 today" },',
    '  { title: "Replace a light switch",           time: "30 mins", cost: "£3–15",  level: "Beginner", category: "Electrics",  href: "/guides/replace-a-light-switch",           difficulty: 2, saves: "Save £60–100 today" },',
    '  { title: "Fix a doorbell",                   time: "30 mins", cost: "£2–12",  level: "Beginner", category: "Electrics",  href: "/guides/fix-a-doorbell",                   difficulty: 1, saves: "Save £40–80 today" },',
    '  { title: "Fix a squeaky floorboard",         time: "20 mins", cost: "£2–8",   level: "Beginner", category: "Carpentry",  href: "/guides/fix-a-squeaky-floorboard",         difficulty: 1, saves: "Save £40–60 today" },',
    '  { title: "Fix a sticking door",              time: "45 mins", cost: "Free–£4",level: "Beginner", category: "Carpentry",  href: "/guides/fix-a-sticking-door",              difficulty: 2, saves: "Save £50–80 today" },',
    '  { title: "Fix a sticking drawer",            time: "15 mins", cost: "Free–£3",level: "Beginner", category: "Carpentry",  href: "/guides/fix-a-sticking-drawer",            difficulty: 1, saves: "Save £30–50 today" },',
    '  { title: "Hang a picture frame",             time: "20 mins", cost: "£2–6",   level: "Beginner", category: "Carpentry",  href: "/guides/hang-a-picture-frame",             difficulty: 1, saves: "Save £30–60 today" },',
    '  { title: "Fix a broken cabinet hinge",       time: "20 mins", cost: "Free–£8",level: "Beginner", category: "Carpentry",  href: "/guides/fix-a-broken-cabinet-hinge",       difficulty: 1, saves: "Save £30–60 today" },',
]

home_path = os.path.join(BASE, "app", "page.tsx")
with open(home_path) as f:
    src = f.read()

# Find the closing ] of the guides array on the homepage
# The array ends with `]` followed by the categories constant
marker = "\nconst categories"
idx = src.find(marker)
assert idx != -1, "Could not find 'const categories' in homepage"
insert_at = src.rfind("]", 0, idx)
assert insert_at != -1

# Check if these guides are already present
if "replace-a-plug-fuse" not in src:
    new_entries = "\n" + "\n".join(NEW_HOME_GUIDES) + "\n"
    src = src[:insert_at] + new_entries + src[insert_at:]
    with open(home_path, "w") as f:
        f.write(src)
    print("  ✓ app/page.tsx (homepage guides array updated)")
else:
    print("  ~ app/page.tsx (new guides already present, skipped)")

print("\nDone.")
