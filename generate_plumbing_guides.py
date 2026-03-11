#!/usr/bin/env python3
"""Generate 8 plumbing/heating guide pages and update lib files."""

import os

# ---------------------------------------------------------------------------
# GUIDE DATA
# ---------------------------------------------------------------------------
GUIDES = [
    {
        "slug": "fix-a-leaking-pipe-joint",
        "fn_name": "FixALeakingPipeJoint",
        "title": "Fix a leaking pipe joint",
        "h1": "Fix a leaking pipe joint",
        "saves_headline": "Save £60–120 today",
        "meta_line": "30 mins · Beginner · Saves £60–120 vs a plumber",
        "meta_title": "Fix a Leaking Pipe Joint | FixItFirst",
        "meta_desc": "Stop a leaking pipe joint yourself in 30 minutes. Step-by-step guide covering PTFE tape and compression fittings. Save £60–120 vs a plumber.",
        "before": [
            "This guide covers leaks at threaded or compression pipe joints — the most common kind. If water is spraying from the middle of a pipe rather than at a joint, that is a different problem.",
            "Turn off the water before you start and have towels ready. Most joint leaks are a simple fix.",
        ],
        "tools": [
            ("✓", "Adjustable spanner", "you almost certainly already have one"),
            ("✓", "Old towels or cloths", "to dry the joint and catch drips"),
            ("!", "PTFE thread seal tape", "buy: £1–2 from any hardware shop"),
            ("!", "Replacement olive if needed", "buy: 50p–£1 for compression joints — take the old one to match"),
        ],
        "steps": [
            ("Turn off the water supply", "Close the isolation valve on the pipe leading to the leak, or turn off the mains stop cock under the kitchen sink if there is no local valve."),
            ("Dry the joint completely", "Mop up standing water and dry the joint with a towel. The joint must be fully dry before you can see where the leak is coming from."),
            ("For threaded joints — wrap with PTFE tape", "Undo the joint with your spanner (anticlockwise). Remove any old tape. Wrap new PTFE tape clockwise around the thread 4–6 times, stretching it slightly as you wrap so it seats into the thread."),
            ("For compression joints — check the olive", "Undo the compression nut. The olive is the small brass ring inside. If it is damaged or the nut has been overtightened and distorted it, replace both the olive and re-tighten the nut."),
            ("Reassemble and tighten", "Screw the joint back together hand-tight, then give it another half-turn with the spanner. Do not overtighten — finger-tight plus half a turn is enough for most joints."),
            ("Turn water back on and check", "Slowly open the isolation valve. Watch the joint for 2 minutes. If still dripping, give the nut a further quarter-turn. If it still leaks, call a plumber."),
        ],
        "beginners_wrong": [
            "Overtightening the joint — this distorts the olive in compression fittings and can crack plastic fittings.",
            "Forgetting to wrap PTFE tape clockwise — if you wrap it anticlockwise, it unravels when you tighten the fitting.",
            "Not drying the joint before testing — residual drips look like a leak when the joint is actually sealed.",
        ],
        "stop_call_pro": [
            "Water is coming from a split or corroded section of pipe, not a joint",
            "The joint is in the wall or floor and you cannot access it properly",
            "The leak returns within a day of your repair",
        ],
        "pro_type": "plumber",
        "cost_rows": [
            ("PTFE tape only", "£2"),
            ("PTFE tape + replacement olive", "£5–8"),
            ("Plumber would charge", "£60–120"),
        ],
        "learned": "You now understand how threaded and compression fittings work. These skills transfer to replacing tap connectors, fitting isolation valves, and understanding your whole water system.",
        "unlocks": "Once you can fix a leaking joint, you can replace tap connectors, install isolating valves, and tackle most under-sink plumbing work with confidence.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar difficulty to fixing a dripping tap — the main skill is knowing when to stop tightening",
        "completed_count": 1842,
        "renter_warning": "Landlords are legally responsible for fixing leaking pipes. Report it in writing first. If there is a risk of water damage and they do not act within 24 hours, contact Environmental Health.",
        "guide_tools": ["adjustable-spanner"],
        "category": "Plumbing",
        "time": "30 mins",
        "cost": "£3–8",
        "level": "Beginner",
        "difficulty": 2,
        "saves": "Save £60–120 today",
        "uk_specific": True,
        "quick_win": False,
        "skill_points": 20,
    },
    {
        "slug": "replace-a-toilet-seat",
        "fn_name": "ReplaceAToiletSeat",
        "title": "Replace a toilet seat",
        "h1": "Replace a toilet seat",
        "saves_headline": "Save £40–80 today",
        "meta_line": "20 mins · Beginner · Saves £40–80 vs a plumber",
        "meta_title": "Replace a Toilet Seat | FixItFirst",
        "meta_desc": "Replace a toilet seat in 20 minutes with no plumbing knowledge. Step-by-step guide. Save £40–80 vs calling a plumber.",
        "before": [
            "This is one of the easiest jobs in the house. No tools needed beyond a screwdriver for most modern seats.",
            "Measure your toilet pan before buying a replacement — pan shapes vary (round, D-shape, square-front). Check the distance between the hinge bolt holes too.",
        ],
        "tools": [
            ("✓", "Screwdriver (cross-head)", "most hinge bolts use cross-head fixings"),
            ("✓", "Adjustable spanner or pliers", "to grip the nut under the pan if needed"),
            ("!", "Replacement toilet seat", "buy: £15–40 — measure your pan first"),
        ],
        "steps": [
            ("Remove the old seat", "Open the hinge covers on top of the seat (they flip up or prise off). Unscrew the bolts — usually cross-head screws on top, plastic wing-nuts underneath. Lift the old seat off."),
            ("Clean the hinge area", "Wipe around the hinge bolt holes with a damp cloth and mild spray cleaner. Old seats leave a surprising amount of grime underneath."),
            ("Check your measurements", "Measure the distance between the two hinge bolt holes — standard UK pans are 155mm apart. Also note the pan shape (D-shaped, round, or square-front) so the new seat fits correctly."),
            ("Fit the hinge bolts", "Drop the new hinge bolts down through the pan holes from above. Thread the spacer and wing-nut on from underneath and hand-tighten."),
            ("Position and tighten", "Seat the lid and seat on the hinges and check it sits centrally over the bowl. Tighten the wing-nuts until snug — do not overtighten or you will crack the ceramic."),
            ("Test the soft-close mechanism", "Lower the seat and lid slowly — they should close gently under their own weight. If they drop too fast, adjust the hinge dampers (small screws on the hinge body) if present."),
        ],
        "beginners_wrong": [
            "Buying a seat without measuring — pan hole spacing and pan shape vary between manufacturers.",
            "Overtightening the wing-nuts — this can crack the ceramic, which is an expensive mistake.",
            "Not checking the seat is centred before tightening — it looks obviously wrong once fitted.",
        ],
        "stop_call_pro": [
            "There are cracks in the ceramic pan around the bolt holes",
            "The pan fixing points are broken and cannot hold bolts",
        ],
        "pro_type": "plumber",
        "cost_rows": [
            ("Basic replacement seat", "£15–25"),
            ("Soft-close seat", "£25–40"),
            ("Plumber would charge", "£40–80 (plus seat cost)"),
        ],
        "learned": "You can now fit any standard toilet seat and understand pan sizing. This transfers to replacing the cistern lid, fitting a bidet seat, and other bathroom fitting work.",
        "unlocks": "You can now tackle other bathroom fitting tasks: replacing a towel rail, fitting a toilet roll holder, or replacing a basin pop-up plug mechanism.",
        "last_updated": "March 2025",
        "difficulty_comparison": "One of the easiest jobs on the site — easier than bleeding a radiator",
        "completed_count": 2891,
        "renter_warning": "Landlords are responsible for providing a working toilet seat. Report a broken seat in writing. Replacing it yourself is usually fine — but keep the receipt and tell your landlord, so it is not deducted from your deposit.",
        "guide_tools": ["screwdriver-cross", "pliers"],
        "category": "Plumbing",
        "time": "20 mins",
        "cost": "£15–40",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £40–80 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "fix-low-water-pressure",
        "fn_name": "FixLowWaterPressure",
        "title": "Fix low water pressure",
        "h1": "Fix low water pressure",
        "saves_headline": "Save £60–100 today",
        "meta_line": "30 mins · Beginner · Saves £60–100 vs a plumber",
        "meta_title": "Fix Low Water Pressure | FixItFirst",
        "meta_desc": "Diagnose and fix low water pressure at home in under 30 minutes. Covers aerators, stop valves, and when to call the water company. Save £60–100.",
        "before": [
            "First establish whether it is one tap, one room, or the whole house. That tells you where to look.",
            "In the UK, the water company is responsible for pressure at the street. Inside your home, it is usually a blocked aerator, a partially closed valve, or a scale build-up.",
        ],
        "tools": [
            ("✓", "Adjustable spanner", "for removing aerators"),
            ("✓", "Small bowl", "to catch water when removing the aerator"),
            ("!", "Descaling solution or white vinegar", "buy: £2–4 to soak a blocked aerator"),
        ],
        "steps": [
            ("Find out which taps are affected", "Test every cold tap in the house. If pressure is low on one tap only, the problem is local (aerator or valve). If it is low on all taps, the problem is the mains supply or the main stop valve."),
            ("Check the main stop valve", "The main stop valve is usually under the kitchen sink. Turn it fully anticlockwise to make sure it is fully open. A partially closed valve cuts pressure to the whole house."),
            ("Check the local isolation valves", "Under each sink is a small isolation valve on the supply pipe. Use a flat-head screwdriver — the slot should be in line with the pipe (open). If it is across the pipe, it is partially closed."),
            ("Clean the tap aerator", "Unscrew the aerator from the tip of the tap spout (turn anticlockwise). You will see a small mesh filter. Soak it in white vinegar for 30 minutes to dissolve limescale, then rinse and refit."),
            ("Clean the shower head", "Unscrew the shower head and soak it in a bowl of white vinegar for an hour. Scale build-up inside the head is the most common cause of poor shower pressure."),
            ("Call the water company if the whole house is affected", "If all taps are equally low pressure and your stop valve is fully open, call your water supplier. Low mains pressure is their responsibility to fix, and it is free."),
        ],
        "beginners_wrong": [
            "Assuming low pressure on one tap means a whole-house problem — check other taps first.",
            "Putting the aerator back without rinsing — vinegar and loosened scale will come out of the tap.",
            "Not checking whether the stop valve is fully open — this is the most common cause and takes 5 seconds to fix.",
        ],
        "stop_call_pro": [
            "Pressure is low on all taps and your stop valve is fully open — call the water company",
            "You suspect the pressure reducer (PRV) on the mains inlet is faulty",
            "There is a visible leak on the mains pipe coming into the property",
        ],
        "pro_type": "plumber",
        "cost_rows": [
            ("Vinegar to descale aerator", "£2–4"),
            ("Replacement aerator", "£5–10"),
            ("Plumber would charge", "£60–100"),
        ],
        "learned": "You now understand how water pressure works through your home — from the street main to each tap. You can diagnose whether a pressure problem is local or whole-house.",
        "unlocks": "These diagnostic skills transfer to identifying airlocks in pipes, tracing why one radiator is cold, and understanding your whole water distribution system.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Easier than fixing a dripping tap — mostly investigation rather than physical work",
        "completed_count": 1347,
        "renter_warning": "If low pressure is a whole-house issue, it is the landlord's responsibility to investigate and fix. Report it in writing. For single-tap issues, cleaning an aerator is a reasonable tenant repair.",
        "guide_tools": ["adjustable-spanner"],
        "category": "Plumbing",
        "time": "30 mins",
        "cost": "Free–£10",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £60–100 today",
        "uk_specific": True,
        "quick_win": False,
        "skill_points": 10,
    },
    {
        "slug": "unblock-a-toilet",
        "fn_name": "UnblockAToilet",
        "title": "Unblock a toilet",
        "h1": "Unblock a toilet",
        "saves_headline": "Save £60–120 today",
        "meta_line": "20 mins · Beginner · Saves £60–120 vs a plumber",
        "meta_title": "Unblock a Toilet | FixItFirst",
        "meta_desc": "Unblock a toilet yourself in under 20 minutes using a plunger. Step-by-step guide for complete beginners. Save £60–120 vs a plumber.",
        "before": [
            "Do not keep flushing a blocked toilet — you risk overflowing the bowl. One flush to confirm it is blocked, then stop.",
            "The vast majority of toilet blockages clear with a plunger in under 10 minutes. You do not need chemicals.",
        ],
        "tools": [
            ("!", "Toilet plunger (flange plunger)", "buy: £5–12 — a flange plunger (with a fold-out inner cup) works much better than a flat cup plunger for toilets"),
            ("✓", "Rubber gloves", "essential — wear them"),
            ("✓", "Old towels or newspaper", "to protect the floor around the toilet"),
        ],
        "steps": [
            ("Put on rubber gloves and protect the floor", "Lay old towels or newspaper around the base of the toilet. If the water level in the bowl is very high, bail some out into a bucket first using an old jug."),
            ("Position the plunger", "Push the flange plunger into the toilet bowl and seat it firmly over the drain hole. Make sure there is a good seal — the plunger should be completely submerged and covering the hole."),
            ("Plunge with a steady rhythm", "Push down firmly and pull back up without breaking the seal. Do 10–15 strokes with increasing force. The suction and pressure combination dislodges most blockages."),
            ("Test with a flush", "Remove the plunger and flush. If the water drains away normally, you are done. If it is still blocked or drains slowly, repeat the plunging for another 10–15 strokes."),
            ("Try hot water if plunging fails", "Pour a full kettle of very hot (not boiling) water into the bowl from waist height. The heat and pressure help break down softer blockages. Wait 5 minutes, then flush."),
            ("Sanitise and clean up", "Rinse the plunger in the toilet bowl after a successful flush. Wipe down the toilet and surrounding floor. Wash your hands thoroughly."),
        ],
        "beginners_wrong": [
            "Using a flat cup plunger designed for sinks — it does not create enough suction in a toilet. Use a flange plunger.",
            "Giving up after 5 strokes — most blockages need 10–20 firm plunges to shift.",
            "Pouring chemical drain cleaner in first — this is ineffective on solid blockages and makes the job unpleasant if you then need to use a plunger.",
        ],
        "stop_call_pro": [
            "The toilet is still blocked after 20 minutes of plunging",
            "Multiple drains in the house are blocked at the same time — this indicates a main drain issue",
            "You can hear gurgling from other drains when you flush",
        ],
        "pro_type": "plumber",
        "cost_rows": [
            ("Flange plunger (if you need one)", "£8–12"),
            ("Hot water + plunging", "Free"),
            ("Plumber would charge", "£60–120"),
        ],
        "learned": "You now know how to clear a toilet blockage and — crucially — when a blockage indicates a bigger problem in the main drain. The plunger technique transfers to unblocking any drain.",
        "unlocks": "With a plunger, you can now tackle blocked baths, showers, and sinks too. Next step: unblocking an outside drain if your whole system backs up.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar to unblocking a drain — straightforward once you have the right plunger",
        "completed_count": 3421,
        "renter_warning": "Landlords are responsible for maintaining drainage. However, if you caused the blockage (flushing wet wipes, nappies, etc.) you may be liable. Most standard blockages from normal use are the landlord's responsibility.",
        "guide_tools": ["plunger", "rubber-gloves"],
        "category": "Plumbing",
        "time": "20 mins",
        "cost": "Free–£12",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £60–120 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "replace-a-shower-head",
        "fn_name": "ReplaceAShowerHead",
        "title": "Replace a shower head",
        "h1": "Replace a shower head",
        "saves_headline": "Save £40–80 today",
        "meta_line": "15 mins · Beginner · Saves £40–80 vs a plumber",
        "meta_title": "Replace a Shower Head | FixItFirst",
        "meta_desc": "Replace a shower head in 15 minutes with no tools. Step-by-step guide. Save £40–80 vs calling a plumber.",
        "before": [
            "Replacing a shower head is one of the easiest plumbing jobs — in most cases you just unscrew the old one and screw on the new one.",
            "Standard UK shower hoses use a universal ½-inch BSP connection. Any shower head from a hardware shop will fit. You do not need to turn off the water.",
        ],
        "tools": [
            ("✓", "Adjustable spanner or pliers", "to grip the connection — wrap jaws in a cloth to avoid scratching"),
            ("✓", "Old cloth", "to grip and protect the chrome"),
            ("!", "Replacement shower head", "buy: £10–40 from any hardware shop or supermarket"),
            ("!", "PTFE tape", "buy: £1 — recommended for a reliable seal"),
        ],
        "steps": [
            ("Unscrew the old shower head", "Grip the connection between the hose and the shower head with your hand or pliers (wrap in a cloth to protect the chrome). Twist anticlockwise — it should come off easily. If stiff, use the spanner."),
            ("Check the thread", "Look at the threaded end of the hose. Clean off any old PTFE tape or scale with a cloth. Standard UK shower hoses use ½-inch BSP thread — check your new shower head says the same."),
            ("Wrap PTFE tape", "Wrap 4–6 turns of PTFE tape clockwise around the thread on the hose end, pulling it tight as you wrap. This prevents any drips at the joint."),
            ("Screw on the new head", "Thread the new shower head onto the hose clockwise, hand-tight first. Then give it one more quarter-turn with the spanner. Do not overtighten."),
            ("Test for leaks", "Turn on the shower and check the connection for drips. If it drips, turn off, add another layer of PTFE tape, and retighten."),
            ("Adjust height and angle", "Most shower heads have an adjustable ball joint at the hose connection — loosen the lock ring, set the angle you want, retighten."),
        ],
        "beginners_wrong": [
            "Not wrapping PTFE tape — the joint will almost certainly drip without it.",
            "Overtightening and cracking the plastic head — hand-tight plus a quarter-turn is plenty.",
            "Buying a shower head without checking the hose thread — though almost all UK showers use ½ BSP, it is worth checking.",
        ],
        "stop_call_pro": [
            "The hose itself is damaged or the connection to the wall valve is leaking",
            "Water is coming from inside the shower tray or wall rather than the head or hose",
        ],
        "pro_type": "plumber",
        "cost_rows": [
            ("Basic replacement shower head", "£10–20"),
            ("Premium rainfall head", "£25–40"),
            ("Plumber would charge", "£40–80 (plus parts)"),
        ],
        "learned": "You now understand BSP shower connections and can confidently replace hoses and heads. This transfers to fitting a shower rail, replacing a bath mixer spout, and understanding flexible pipe connectors.",
        "unlocks": "You can now replace the shower hose, fit a shower riser rail, or upgrade to a rainfall shower head — all using the same skill.",
        "last_updated": "March 2025",
        "difficulty_comparison": "One of the easiest plumbing jobs — similar to changing a lightbulb",
        "completed_count": 4103,
        "renter_warning": "A like-for-like shower head replacement is reasonable maintenance in most tenancies. Keep the old head and receipt, and let your landlord know if it was damaged to avoid deposit issues.",
        "guide_tools": ["adjustable-spanner"],
        "category": "Plumbing",
        "time": "15 mins",
        "cost": "£10–40",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £40–80 today",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "turn-off-water-mains",
        "fn_name": "TurnOffWaterMains",
        "title": "Turn off your water mains",
        "h1": "Turn off your water mains",
        "saves_headline": "Could save £1,000s in flood damage",
        "meta_line": "5 mins · Beginner · Essential emergency skill",
        "meta_title": "How to Turn Off Your Water Mains | FixItFirst",
        "meta_desc": "Find and turn off your water mains stop cock quickly. Essential emergency skill — could save thousands in flood damage. Step-by-step guide.",
        "before": [
            "Every adult in the household should know where the main stop cock is and how to turn it off. If a pipe bursts, you may have less than a minute to act.",
            "The stop cock is almost always under the kitchen sink in UK homes. Take 5 minutes now to find it, before you ever need it.",
        ],
        "tools": [
            ("✓", "No tools usually needed", "most stop cocks can be turned by hand"),
            ("!", "Flat-head screwdriver", "some older stop cocks require a screwdriver in the slot — buy: already in most homes"),
            ("!", "Stop cock key", "buy: £3–5 from a plumber's merchant — useful if the stop cock is stiff or in a pit outside"),
        ],
        "steps": [
            ("Find the internal stop cock", "Check under the kitchen sink first — this is where it is in 90% of UK homes. It is a brass valve on the pipe coming through the wall or floor. It may have a lever handle or a round knurled handle."),
            ("Check secondary locations", "If not under the sink, try: the airing cupboard, the ground floor bathroom, or a utility room. In some flats, it is in a communal cupboard outside your door."),
            ("Turn off the stop cock", "Turn the stop cock clockwise until it stops. A lever handle should turn 90 degrees so it is perpendicular to the pipe. A round handle may need several turns. The water will stop within a few seconds."),
            ("Confirm the water is off", "Open a cold tap (not a hot tap — hot water cylinders hold a tank of water). No water means the stop cock is fully off. A trickle means the valve is partially open or worn — keep turning."),
            ("Find the external stop cock", "Outside each property is an external stop cock, usually under a small metal cover in the pavement or garden. This requires a stop cock key. Know where it is in case the internal one fails."),
            ("Test it periodically", "Turn the stop cock off and on once a year. Valves that are never turned seize over time. If yours is stiff or will not fully turn off, have a plumber replace it before you have an emergency."),
        ],
        "beginners_wrong": [
            "Not finding the stop cock until there is already water everywhere — find it now, not in an emergency.",
            "Turning clockwise to open and anticlockwise to close — it is the opposite. Clockwise closes the valve (right-tight, left-loose).",
            "Assuming a lever handle is closed when it is parallel to the pipe — parallel means open, perpendicular means closed.",
        ],
        "stop_call_pro": [
            "The internal stop cock will not turn off even with maximum force",
            "Water is still flowing after the stop cock is turned off — call your water supplier immediately",
            "The stop cock is leaking itself",
        ],
        "pro_type": "plumber",
        "cost_rows": [
            ("Finding and using the stop cock", "Free"),
            ("Stop cock key (useful to own)", "£3–5"),
            ("Plumber to replace a seized stop cock", "£80–150"),
        ],
        "learned": "You now know how to shut off water to your whole home in seconds. This is the single most important plumbing skill — it limits the damage from any burst pipe or appliance failure.",
        "unlocks": "With confidence in turning off the mains, you can safely tackle any plumbing job: fixing leaks, replacing taps, installing washing machines, and more.",
        "last_updated": "March 2025",
        "difficulty_comparison": "The easiest guide on the site — but one of the most important things to know",
        "completed_count": 5612,
        "renter_warning": "Ask your landlord or letting agent where the stop cock is when you move in — this is a basic piece of information they should provide. Also ask about the external stop cock location.",
        "guide_tools": [],
        "category": "Plumbing",
        "time": "5 mins",
        "cost": "Free",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Prevents flood damage",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "repressurise-a-boiler",
        "fn_name": "RepressuriseABoiler",
        "title": "Repressurise a boiler",
        "h1": "Repressurise a boiler",
        "saves_headline": "Save £50–80 today",
        "meta_line": "10 mins · Beginner · Saves £50–80 vs a heating engineer",
        "meta_title": "How to Repressurise a Boiler | FixItFirst",
        "meta_desc": "Repressurise your boiler in 10 minutes. Step-by-step UK guide — covers finding the filling loop and reading the pressure gauge. Save £50–80.",
        "before": [
            "If your boiler has an error code or your radiators are cold throughout the house, check the pressure gauge on the boiler front. If it reads below 1 bar, the system needs repressurising.",
            "This is a safe, straightforward job on any sealed central heating system (the most common type in UK homes). It takes 10 minutes.",
        ],
        "tools": [
            ("✓", "No tools needed", "everything required is already on your boiler"),
        ],
        "steps": [
            ("Check the pressure gauge", "Look at the pressure gauge on the front of the boiler. It is usually a dial or digital display. Normal pressure is 1–1.5 bar. Below 1 bar means the system has lost pressure and needs topping up."),
            ("Locate the filling loop", "The filling loop is a silver braided hose (about 30cm long) with valves at each end, usually found under the boiler or in the airing cupboard. Some are external (a separate hose), some are internal (a key on the boiler body)."),
            ("Connect external filling loops", "If the filling loop is separate, connect it to the two valves. The ends screw or push-click on. Make sure it is secure at both ends."),
            ("Open the filling valves", "Open both valves — usually by turning them a quarter-turn so the slot aligns with the hose. You will hear water entering the system."),
            ("Watch the pressure gauge", "Watch the gauge rise slowly. Stop when the needle reaches 1.5 bar. Do not let it go above 2 bar — this can trigger the pressure relief valve and waste water."),
            ("Close the valves and remove the loop", "Close both valves, remove the filling loop if it was external, and reset the boiler (usually a reset button, held for 3 seconds). The boiler should fire up normally."),
        ],
        "beginners_wrong": [
            "Overfilling past 2 bar — the boiler will lock out again and you will need to bleed a radiator to release pressure.",
            "Not closing both valves before removing the hose — water will spray out.",
            "Assuming the boiler needs repressurising every week — if pressure keeps dropping, there is a leak in the system that needs a heating engineer.",
        ],
        "stop_call_pro": [
            "The pressure gauge rises immediately after repressurising and trips the relief valve — there is too much water in the system",
            "You cannot find the filling loop or it appears damaged",
            "The boiler pressure drops again within a few days — there is a leak that needs finding",
        ],
        "pro_type": "heating engineer",
        "cost_rows": [
            ("Repressurising the boiler", "Free"),
            ("If there is an underlying leak", "£100–300 to find and fix"),
            ("Heating engineer call-out", "£50–80"),
        ],
        "learned": "You now understand how a sealed central heating system holds pressure and how to restore it. This gives you the knowledge to understand boiler error codes and when to call for help.",
        "unlocks": "You can now bleed radiators, identify pressure loss patterns, and have an informed conversation with a heating engineer about any persistent issues.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Easier than bleeding a radiator — just opening valves and watching a gauge",
        "completed_count": 7823,
        "renter_warning": "Repressurising a boiler is normal maintenance you can do yourself. If you need to do it more than once a month, report it to your landlord in writing — a persistent pressure drop means a leak that is their responsibility to fix.",
        "guide_tools": [],
        "category": "Heating",
        "time": "10 mins",
        "cost": "Free",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £50–80 today",
        "uk_specific": True,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "fix-a-cold-radiator",
        "fn_name": "FixAColdRadiator",
        "title": "Fix a cold radiator",
        "h1": "Fix a cold radiator",
        "saves_headline": "Save £50–80 today",
        "meta_line": "20 mins · Beginner · Saves £50–80 vs a heating engineer",
        "meta_title": "Fix a Cold Radiator | FixItFirst",
        "meta_desc": "Diagnose and fix a cold radiator in 20 minutes. Covers bleeding, thermostatic valves, and lockshield valves. Save £50–80 vs a heating engineer.",
        "before": [
            "First work out which part of the radiator is cold — hot at the top and cold at the bottom means sludge; cold at the top with hot at the bottom means trapped air (bleeding needed).",
            "This guide covers the two most common causes: trapped air (bleed it) and a stuck valve (open it). Both are simple fixes.",
        ],
        "tools": [
            ("✓", "Radiator bleed key", "most homes have one — buy for £1–3 if not"),
            ("✓", "Small cloth or old towel", "to catch the drip when bleeding"),
            ("!", "Flat-head screwdriver", "to adjust the lockshield valve cap if needed"),
        ],
        "steps": [
            ("Identify the problem", "With the heating on, feel across the radiator with your hand. Cold at the top = trapped air — go to step 2. Cold at the bottom only = sludge (needs a power flush — call a heating engineer). Completely cold = closed valve — go to step 4."),
            ("Bleed the radiator — locate the bleed valve", "The bleed valve is a small square peg in the top corner of the radiator (usually the top right). Insert the bleed key into the square hole."),
            ("Open the bleed valve", "Turn the bleed key anticlockwise about a quarter-turn. Hold the cloth below it. You will hear air hissing out. When the hiss stops and a steady drip of water appears, close the valve clockwise immediately."),
            ("Check the thermostatic valve (TRV)", "The TRV is the valve with numbered settings (1–5), usually on the side of the radiator at the bottom. Make sure it is not set to 0 (off) or frost protection (snowflake). Turn it to 3–4."),
            ("Check the lockshield valve", "The lockshield is the valve on the other side of the radiator — it has a plastic cap. Remove the cap and use pliers or a spanner to open the valve a few turns anticlockwise. This valve controls flow balance."),
            ("Check boiler pressure and reset", "After bleeding any radiator, check the boiler pressure gauge. If it has dropped below 1 bar, repressurise the boiler (see our repressurising guide). Reset the boiler and let the heating run for 30 minutes."),
        ],
        "beginners_wrong": [
            "Not having a cloth ready when bleeding — water squirts out without warning once the air escapes.",
            "Leaving the bleed valve open — it only needs a quarter-turn and should be closed as soon as water appears.",
            "Forgetting to check boiler pressure after bleeding — bleeding releases water from the system and drops the pressure.",
        ],
        "stop_call_pro": [
            "The radiator is cold at the bottom — this is sludge and requires a power flush",
            "Multiple radiators throughout the house are cold — indicates a circulation problem",
            "The boiler pressure drops to zero within 24 hours of repressurising",
        ],
        "pro_type": "heating engineer",
        "cost_rows": [
            ("Bleeding the radiator", "Free"),
            ("Bleed key (if needed)", "£1–3"),
            ("Heating engineer call-out", "£50–80"),
        ],
        "learned": "You now understand how air and circulation affect radiator performance. You know how to bleed radiators, read TRV settings, and identify when a problem is beyond a simple fix.",
        "unlocks": "You can now balance all the radiators in your home, repressurise the boiler, and understand how your whole central heating system works.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar to bleeding a radiator — this guide just covers more causes of the same problem",
        "completed_count": 5234,
        "renter_warning": "Landlords are responsible for a functional heating system. Bleeding a radiator is reasonable self-maintenance. If a radiator is cold due to a faulty valve or sludge, report it in writing.",
        "guide_tools": ["bleed-key"],
        "category": "Heating",
        "time": "20 mins",
        "cost": "Free–£3",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £50–80 today",
        "uk_specific": True,
        "quick_win": True,
        "skill_points": 10,
    },
]


# ---------------------------------------------------------------------------
# TSX TEMPLATE
# ---------------------------------------------------------------------------
def make_tools_jsx(tools):
    lines = []
    for icon, name, note in tools:
        if icon == "✓":
            icon_class = "text-green-500"
        else:
            icon_class = "text-orange-500"
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
        # escape any backticks/single quotes in desc
        desc_escaped = desc.replace("'", "\\'")
        title_escaped = title.replace("'", "\\'")
        lines.append(f"  {{ title: '{title_escaped}', description: '{desc_escaped}' }},")
    lines.append("]")
    return "\n".join(lines)


def make_wrong_jsx(items):
    paras = []
    for i, item in enumerate(items):
        mb = " mb-2" if i < len(items) - 1 else ""
        paras.append(f'          <p className="text-sm text-yellow-900{mb}">{item}</p>')
    return "\n".join(paras)


def make_pro_jsx(items, pro_type):
    paras = []
    for i, item in enumerate(items):
        mb = " mb-1" if i < len(items) - 1 else ""
        paras.append(f'          <p className="text-sm text-red-900{mb}">{item}</p>')
    return "\n".join(paras)


def make_cost_jsx(rows):
    lines = []
    for i, (label, amount) in enumerate(rows):
        if i < len(rows) - 1:
            lines.append(
                f'            <div className="flex justify-between py-2 border-b border-gray-200">'
                f'<span className="text-gray-600">{label}</span>'
                f'<span className="font-medium">{amount}</span></div>'
            )
        else:
            lines.append(
                f'            <div className="flex justify-between py-2">'
                f'<span className="text-gray-600">{label}</span>'
                f'<span className="font-medium text-red-600">{amount}</span></div>'
            )
    return "\n".join(lines)


def make_page_tsx(g):
    slug = g["slug"]
    fn_name = g["fn_name"]
    pro_type = g["pro_type"]
    stop_title = f"Stop and call a {pro_type} if..."

    tools_jsx = make_tools_jsx(g["tools"])
    steps_const = make_steps_const(g["steps"])
    wrong_jsx = make_wrong_jsx(g["beginners_wrong"])
    pro_jsx = make_pro_jsx(g["stop_call_pro"], pro_type)
    cost_jsx = make_cost_jsx(g["cost_rows"])

    before_paras = "\n".join(
        f'          <p className="text-sm text-gray-700 mb-2">{p}</p>' for p in g["before"]
    )

    renter_block = ""
    if g.get("renter_warning"):
        renter_block = f"""        {{GUIDE_META['{slug}'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{{GUIDE_META['{slug}'].renterWarning}}</p>
          </div>
        )}}"""

    tools_warning = ""
    if g["guide_tools"]:
        tools_warning = f"        <ToolsWarning requiredToolIds={{GUIDE_TOOLS['{slug}']}} />"
    else:
        tools_warning = f"        {{/* No tracked tools for this guide */}}"

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

export default function {fn_name}() {{
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
        <StepProgress steps={{steps}} />
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
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-blue-800 mb-3">What this unlocks</h2>
          <p className="text-sm text-blue-900">{g["unlocks"]}</p>
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
    rw = g.get("renter_warning", "")
    lines = [
        f"  '{slug}': {{",
        f"    lastUpdated: '{g['last_updated']}',",
        f"    difficultyComparison: '{g['difficulty_comparison']}',",
        f"    completedCount: {g['completed_count']},",
    ]
    if rw:
        escaped = rw.replace("'", "\\'")
        lines.append(f"    renterWarning: '{escaped}',")
    lines.append("  },")
    return "\n".join(lines)


def guides_ts_entry(g):
    slug = g["slug"]
    title = g["title"]
    time_ = g["time"]
    cost = g["cost"]
    level = g["level"]
    category = g["category"]
    href = f"/guides/{slug}"
    difficulty = g["difficulty"]
    saves = g["saves"]
    uk = ", ukSpecific: true" if g["uk_specific"] else ""
    qw = ", quickWin: true" if g["quick_win"] else ""
    sp = g["skill_points"]
    return (
        f"  {{ slug: '{slug}', title: '{title}', time: '{time_}', cost: '{cost}', "
        f"level: '{level}', category: '{category}', href: '{href}', "
        f"difficulty: {difficulty}, saves: '{saves}'{uk}{qw}, skillPoints: {sp} }},"
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
    title = g["title"]
    time_ = g["time"]
    cost = g["cost"]
    level = g["level"]
    cat = g["category"]
    href = f"/guides/{slug}"
    saves = g["saves"]
    diff = g["difficulty"]
    return (
        f"  {{ title: '{title}', time: '{time_}', cost: '{cost}', "
        f"level: '{level}', category: '{cat}', href: '{href}', "
        f"saves: '{saves}', difficulty: {diff} }},"
    )


# ---------------------------------------------------------------------------
# WRITE FILES
# ---------------------------------------------------------------------------
BASE = "/home/user/fixitfirst"

for g in GUIDES:
    slug = g["slug"]
    out_dir = os.path.join(BASE, "app", "guides", slug)
    os.makedirs(out_dir, exist_ok=True)
    tsx = make_page_tsx(g)
    with open(os.path.join(out_dir, "page.tsx"), "w") as f:
        f.write(tsx)
    print(f"  ✓ Wrote app/guides/{slug}/page.tsx")


# ---------------------------------------------------------------------------
# UPDATE lib/guide-meta.ts
# ---------------------------------------------------------------------------
meta_path = os.path.join(BASE, "lib", "guide-meta.ts")
with open(meta_path) as f:
    meta_src = f.read()

new_entries = "\n".join(guide_meta_entry(g) for g in GUIDES)
# Insert before the closing }
meta_src = meta_src.rstrip()
assert meta_src.endswith("}"), f"Unexpected end: {meta_src[-20:]!r}"
meta_src = meta_src[:-1].rstrip()  # remove trailing }
meta_src += "\n" + new_entries + "\n}\n"
with open(meta_path, "w") as f:
    f.write(meta_src)
print("  ✓ Updated lib/guide-meta.ts")


# ---------------------------------------------------------------------------
# UPDATE lib/guides.ts
# ---------------------------------------------------------------------------
guides_path = os.path.join(BASE, "lib", "guides.ts")
with open(guides_path) as f:
    guides_src = f.read()

new_guide_entries = "\n".join(guides_ts_entry(g) for g in GUIDES)
# Insert before the closing ]
guides_src = guides_src.rstrip()
assert guides_src.endswith("]"), f"Unexpected end: {guides_src[-20:]!r}"
guides_src = guides_src[:-1].rstrip()
guides_src += "\n" + new_guide_entries + "\n]\n"
with open(guides_path, "w") as f:
    f.write(guides_src)
print("  ✓ Updated lib/guides.ts")


# ---------------------------------------------------------------------------
# UPDATE lib/tools.ts  (GUIDE_TOOLS only)
# ---------------------------------------------------------------------------
tools_path = os.path.join(BASE, "lib", "tools.ts")
with open(tools_path) as f:
    tools_src = f.read()

new_tool_entries = "\n".join(guide_tools_entry(g) for g in GUIDES)
# Find closing } of GUIDE_TOOLS record and insert before it
# GUIDE_TOOLS ends before TOOLS_STORAGE_KEY
marker = "export const TOOLS_STORAGE_KEY"
idx = tools_src.find(marker)
assert idx != -1, "Could not find TOOLS_STORAGE_KEY in tools.ts"
insert_before = tools_src.rfind("}", 0, idx)
tools_src = tools_src[:insert_before] + "\n" + new_tool_entries + "\n" + tools_src[insert_before:]
with open(tools_path, "w") as f:
    f.write(tools_src)
print("  ✓ Updated lib/tools.ts")


# ---------------------------------------------------------------------------
# UPDATE app/guides/page.tsx
# ---------------------------------------------------------------------------
guides_page_path = os.path.join(BASE, "app", "guides", "page.tsx")
with open(guides_page_path) as f:
    gp_src = f.read()

new_page_entries = "\n".join(guides_page_entry(g) for g in GUIDES)
# Find closing ] of the guides array
marker2 = "export default function GuidesPage"
idx2 = gp_src.find(marker2)
assert idx2 != -1
insert_before2 = gp_src.rfind("]", 0, idx2)
gp_src = gp_src[:insert_before2] + "\n" + new_page_entries + "\n" + gp_src[insert_before2:]
with open(guides_page_path, "w") as f:
    f.write(gp_src)
print("  ✓ Updated app/guides/page.tsx")

print("\nDone — all 8 guide pages + lib files updated.")
