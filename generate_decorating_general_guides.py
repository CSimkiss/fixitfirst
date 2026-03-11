#!/usr/bin/env python3
"""Generate 8 decorating/heating/general guide pages and update lib files."""

import os

GUIDES = [
    # ---- DECORATING ----
    {
        "slug": "fill-and-sand-a-wall",
        "fn_name": "FillAndSandAWall",
        "title": "Fill and sand a wall",
        "h1": "Fill and sand a wall",
        "saves_headline": "Save £50–100 today",
        "meta_line": "45 mins · Beginner · Saves £50–100 vs a decorator",
        "meta_title": "How to Fill and Sand a Wall | FixItFirst",
        "meta_desc": "Fill holes and cracks in a wall and sand smooth in under an hour. Step-by-step beginner guide. Save £50–100 vs a decorator.",
        "before": [
            "Filling and sanding is the most important prep work before painting. Skipping it shows through even two coats of paint.",
            "Most holes and cracks in a wall are caused by nails, screws, minor impacts, or normal shrinkage. All of them can be fixed with the same basic technique.",
        ],
        "tools": [
            ("✓", "Filling knife", "a 4-inch flexible blade is ideal — you may already have one"),
            ("✓", "Small bowl of water", "to wet the filler before applying"),
            ("!", "Ready-mixed filler", "buy: £3–5 — Polyfilla or own-brand equivalent from any hardware shop"),
            ("!", "Sandpaper 120-grit and 240-grit", "buy: £2–4 — coarse to shape, fine to finish"),
            ("!", "Primer or mist coat", "buy: £3–8 — needed over bare filler before painting"),
        ],
        "steps": [
            ("Clean out the hole", "Remove any loose plaster, dust, or old paint from inside the hole with a screwdriver tip or brush. The filler needs to bond with solid material."),
            ("Dampen the hole", "Wet the inside of the hole with a damp finger or brush. This slows the drying of the filler and improves adhesion."),
            ("Apply the filler", "Scoop a small amount of filler onto the filling knife. Press it firmly into the hole, slightly overfilling so it sits just proud of the surface."),
            ("Smooth it off", "Draw the knife flat across the filled area to remove the excess and leave the filler level with the wall. Work in one or two firm strokes."),
            ("Let it dry fully", "Ready-mixed filler typically takes 2–4 hours to dry. It turns from off-white to bright white when ready. Do not sand before it is fully dry or it will pull out."),
            ("Sand smooth", "Sand with 120-grit to flatten any proud areas, then finish with 240-grit for a smooth surface. Feather the edges into the surrounding wall. Prime with a mist coat before painting."),
        ],
        "beginners_wrong": [
            "Painting straight over filler without priming — filler is porous and shows as a dull patch through paint.",
            "Not cleaning out the hole first — filler applied over loose material falls out within days.",
            "Underfilling and trying to sand it flat — it is better to slightly overfill and sand back.",
        ],
        "stop_call_pro": [
            ("Cracks that keep coming back — this indicates structural movement", True),
            ("Cracks wider than 5mm or at window and door corners — may need specialist attention", True),
            ("Damp or discolouration around the crack — fix the source of moisture first", False),
        ],
        "pro_type": "decorator",
        "cost_rows": [
            ("Ready-mixed filler and sandpaper", "£5–9"),
            ("With primer", "£8–17"),
            ("Decorator would charge", "£50–100"),
        ],
        "learned": "You now know how to prepare walls to a paint-ready standard. Filling and sanding is the skill that separates a professional-looking paint job from an amateur one.",
        "unlocks": "Once you can fill and sand, you are ready to paint a room properly — or tackle larger repairs like patching a hole bigger than 20mm.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar difficulty to filling a hole in a wall — this guide just covers the full process in more detail",
        "completed_count": 3891,
        "renter_warning": "Filling small nail holes when you leave is expected and helps protect your deposit. For larger holes, check your tenancy agreement — significant damage beyond fair wear and tear may be chargeable.",
        "guide_tools": ["filling-knife"],
        "category": "Decorating",
        "time": "45 mins",
        "cost": "£5–10",
        "level": "Beginner",
        "difficulty": 2,
        "saves": "Save £50–100 today",
        "uk_specific": False,
        "quick_win": False,
        "skill_points": 20,
    },
    {
        "slug": "tile-a-splashback",
        "fn_name": "TileASplashback",
        "title": "Tile a splashback",
        "h1": "Tile a splashback",
        "saves_headline": "Save £150–300 today",
        "meta_line": "Half a day · Intermediate · Saves £150–300 vs a tiler",
        "meta_title": "How to Tile a Splashback | FixItFirst",
        "meta_desc": "Tile a kitchen or bathroom splashback yourself in half a day. Step-by-step beginner guide. Save £150–300 vs a tiler.",
        "before": [
            "A splashback is an excellent first tiling project — the area is small, most tiles do not need cutting, and any mistakes are not structural.",
            "Turn off the power to any sockets in the splashback area at the consumer unit before you start. Water and adhesive near live sockets is dangerous.",
        ],
        "tools": [
            ("✓", "Tape measure and pencil", "for marking out"),
            ("✓", "Spirit level", "to keep rows straight"),
            ("✓", "Notched adhesive spreader", "usually included with tile adhesive"),
            ("✓", "Grout spreader or old credit card", "to apply grout"),
            ("✓", "Sponge and bucket", "for cleaning off excess grout"),
            ("!", "Tiles", "buy: allow 10% extra for cuts and breakages"),
            ("!", "Tile adhesive", "buy: £8–15 — use a waterproof type for kitchen and bathroom"),
            ("!", "Grout", "buy: £5–10 — choose a colour to complement your tiles"),
            ("!", "Tile spacers", "buy: £2–3 — 2mm or 3mm for standard joints"),
            ("!", "Tile cutter or score-and-snap tool", "buy: £10–20 if you need to cut tiles"),
        ],
        "steps": [
            ("Plan your layout", "Hold tiles against the wall dry to work out your layout. Start from the centre of the area and work outward so any cut tiles are equal on both sides. Mark a level horizontal line as your starting point."),
            ("Prepare the surface", "The wall must be clean, dry, and solid. Remove old sealant, grease, and any loose paint. Sand glossy surfaces lightly so the adhesive can grip."),
            ("Apply tile adhesive", "Spread adhesive onto the wall with the notched spreader, working in small sections (about 30x30cm at a time). Press ridges into the adhesive with the notched edge — this is what grips the tile."),
            ("Set the tiles", "Press each tile firmly onto the adhesive with a slight twisting motion. Place spacers at each corner. Use your spirit level regularly to check rows are straight."),
            ("Leave to set", "Allow the adhesive to cure for at least 24 hours before grouting. Do not disturb the tiles."),
            ("Grout the joints", "Remove the spacers. Apply grout over the tiles with the spreader, pressing it firmly into the joints. Work diagonally across the tiles. Clean excess grout with a damp sponge before it dries. Buff off the haze with a dry cloth after 30 minutes."),
        ],
        "beginners_wrong": [
            "Not turning off the power to sockets in the splash area — this is a safety essential.",
            "Spreading adhesive too far ahead — it skins over and loses grip. Work in small sections.",
            "Grouting before the adhesive has fully cured — tiles can shift, ruining the joint lines.",
        ],
        "stop_call_pro": [
            ("Tiles are going behind an electric hob or cooker — the installation area needs to be confirmed safe first", True),
            ("The wall is damp or the plaster is crumbling — fix the underlying problem before tiling", True),
            ("You need to cut around a socket or switch — consider having an electrician remove the socket faceplate before you tile", False),
        ],
        "pro_type": "tiler",
        "cost_rows": [
            ("Tiles and materials (small splashback)", "£30–60"),
            ("Tiles and materials (full run)", "£60–120"),
            ("Tiler would charge", "£150–300 (plus tiles)"),
        ],
        "learned": "You now know how to plan a tile layout, apply adhesive correctly, and grout neatly. These skills transfer to tiling a bathroom floor, wall, or shower enclosure.",
        "unlocks": "With a splashback done, you can move on to larger tiling projects — a bathroom floor, a feature wall, or a full shower enclosure.",
        "last_updated": "March 2025",
        "difficulty_comparison": "More involved than filling and painting — but very achievable if you take it slowly",
        "completed_count": 1243,
        "renter_warning": "Always get your landlord's written permission before tiling in a rented property. Tiling is a permanent change and removing tiles without permission will almost certainly cost you your deposit.",
        "guide_tools": ["spirit-level", "tape-measure"],
        "category": "Decorating",
        "time": "Half a day",
        "cost": "£30–80",
        "level": "Intermediate",
        "difficulty": 3,
        "saves": "Save £150–300 today",
        "uk_specific": False,
        "quick_win": False,
        "skill_points": 30,
    },
    {
        "slug": "strip-wallpaper",
        "fn_name": "StripWallpaper",
        "title": "Strip wallpaper",
        "h1": "Strip wallpaper",
        "saves_headline": "Save £100–200 today",
        "meta_line": "Half a day · Beginner · Saves £100–200 vs a decorator",
        "meta_title": "How to Strip Wallpaper | FixItFirst",
        "meta_desc": "Strip wallpaper in half a day with the right tools and technique. Step-by-step beginner guide. Save £100–200 vs a decorator.",
        "before": [
            "Stripping wallpaper is straightforward but hard work. The key is soaking the paper properly — rushing it causes the paper to tear into tiny pieces and takes four times as long.",
            "Test a small area first. Some wallpaper strips dry in one piece (vinyl-coated paper). Most paper-backed wallpaper needs soaking with water or a stripping solution.",
        ],
        "tools": [
            ("✓", "Plastic dustsheets or newspaper", "to protect the floor and skirting"),
            ("✓", "Bucket and large sponge", "for applying the soaking solution"),
            ("!", "Wallpaper scorer", "buy: £3–5 — scores the surface so water penetrates through vinyl-coated wallpaper"),
            ("!", "Stripping solution", "buy: £4–8 — mix with warm water; warm water alone works for uncoated paper"),
            ("!", "Broad scraper (4–6 inch)", "buy: £5–10 if you do not have one"),
        ],
        "steps": [
            ("Protect the floor", "Lay dustsheets across the whole floor and tape them against the skirting boards. Wallpaper stripping creates a mess and the water can damage wooden floors."),
            ("Score the wallpaper", "If the paper is vinyl-coated (shiny or waterproof surface), run the wallpaper scorer in circular motions across the surface. This breaks through the coating and lets water in. Do not press so hard that you damage the plaster."),
            ("Soak the wall", "Mix stripping solution with warm water according to the pack. Apply generously with a sponge and leave for 5–10 minutes. The paper should feel damp and begin to soften."),
            ("Strip in sections", "Work in sections roughly 60cm wide. Start at a seam or corner and slide the scraper under the paper at a low angle. Push along rather than pulling — you will tear less paper this way."),
            ("Soak stubborn patches again", "If sections resist, apply more water and wait another 5 minutes. Forcing dry paper tears it and leaves small pieces that take much longer to remove."),
            ("Clean the walls", "Once all paper is removed, wash down the walls with clean warm water to remove the adhesive residue. Allow to dry for 24–48 hours before painting or re-papering."),
        ],
        "beginners_wrong": [
            "Not soaking long enough — this is the single biggest cause of slow, frustrating stripping.",
            "Skipping the scorer on vinyl paper — water will not penetrate and the paper will not budge.",
            "Not protecting the floor — the water and paste make a substantial mess on wooden or laminate floors.",
        ],
        "stop_call_pro": [
            ("The plaster beneath the paper is crumbling or coming away — stripping has damaged the wall", True),
            ("There is mould behind the wallpaper — treat the mould and find the source of damp before redecorating", True),
            ("Multiple layers of very old paper — this can take significantly longer and may need a steam stripper", False),
        ],
        "pro_type": "decorator",
        "cost_rows": [
            ("Scorer, stripping solution, scraper", "£12–23"),
            ("Steam stripper hire (if needed)", "£25–40 per day"),
            ("Decorator would charge", "£100–200"),
        ],
        "learned": "You now know how to remove wallpaper efficiently and prepare walls for redecoration. This is the first step in transforming any room.",
        "unlocks": "With bare walls, you can now fill and sand any damage, then paint or re-paper to completely transform the space.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar effort to painting a room — more physical than technical",
        "completed_count": 2187,
        "renter_warning": "Never strip wallpaper in a rented property without written permission from your landlord. If you expose damaged plaster underneath, you may be liable for the repair cost.",
        "guide_tools": ["filling-knife"],
        "category": "Decorating",
        "time": "Half a day",
        "cost": "£12–25",
        "level": "Beginner",
        "difficulty": 2,
        "saves": "Save £100–200 today",
        "uk_specific": False,
        "quick_win": False,
        "skill_points": 20,
    },
    {
        "slug": "repair-a-ceiling-crack",
        "fn_name": "RepairACeilingCrack",
        "title": "Repair a crack in a ceiling",
        "h1": "Repair a crack in a ceiling",
        "saves_headline": "Save £80–150 today",
        "meta_line": "1 hour + drying · Beginner · Saves £80–150 vs a decorator",
        "meta_title": "How to Repair a Crack in a Ceiling | FixItFirst",
        "meta_desc": "Repair a hairline or small crack in a ceiling in under an hour. Step-by-step beginner guide. Save £80–150 vs a decorator.",
        "before": [
            "Most ceiling cracks are cosmetic — caused by normal building movement and temperature change. Hairline cracks that stay the same size over time are safe to fill and paint.",
            "Work from a step ladder, not a chair. You need both hands free and a stable base.",
        ],
        "tools": [
            ("✓", "Step ladder or stable platform", "to reach the ceiling safely"),
            ("✓", "Filling knife (4-inch)", "to apply and smooth the filler"),
            ("✓", "Fine sandpaper 240-grit", "to finish the repair"),
            ("!", "Flexible filler or fine surface filler", "buy: £4–8 — flexible filler is better for cracks that may move slightly"),
            ("!", "Ceiling paint", "buy: £6–12 — white matt is standard for ceilings"),
        ],
        "steps": [
            ("Rake out the crack", "Use the tip of your filling knife or a screwdriver to gently rake out any loose plaster inside the crack. A clean crack accepts filler better than one with crumbling edges."),
            ("Dust and dampen", "Brush out any dust with a dry paintbrush. Dampen the crack lightly with a wet finger to stop the filler drying too fast and cracking as it cures."),
            ("Apply the filler", "Press filler into the crack with the filling knife, pushing it firmly in. Smooth off the excess so the filler sits just proud of the surface."),
            ("Allow to dry fully", "Leave for the time stated on the pack — usually 2–4 hours. Filler turns bright white when fully dry. In a damp or cold room allow longer."),
            ("Sand smooth", "Lightly sand the repair with 240-grit paper. Work in small circular motions and feather the edges into the surrounding ceiling so there is no visible ridge."),
            ("Prime and paint", "Apply a thin coat of mist coat (watered-down paint) or stain block over the repair. This prevents the bare filler showing as a dull patch through the finish coat. Paint the ceiling once the primer is dry."),
        ],
        "beginners_wrong": [
            "Painting directly over unfilled filler without a primer coat — the repair shows through as a circle.",
            "Using a rigid filler on a crack that is still moving — it will crack again within weeks.",
            "Not raking out loose material — filler applied over crumbling plaster falls out.",
        ],
        "stop_call_pro": [
            ("The crack is wider than 5mm or runs diagonally from a corner — may indicate structural movement", True),
            ("The crack keeps coming back after filling — the building is still moving", True),
            ("Large sections of ceiling plaster are loose or bowing downward — do not use that room until it is assessed", False),
        ],
        "pro_type": "decorator",
        "cost_rows": [
            ("Filler and sandpaper", "£6–12"),
            ("With primer and paint", "£12–22"),
            ("Decorator would charge", "£80–150"),
        ],
        "learned": "You can now assess whether a ceiling crack is cosmetic or structural, and repair the cosmetic type to a professional standard.",
        "unlocks": "This technique is identical for wall cracks. Once you can repair a ceiling, you can repair any surface before painting.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Similar to filling a hole in a wall — slightly harder because you are working overhead",
        "completed_count": 1654,
        "renter_warning": "Report ceiling cracks to your landlord in writing, with a photo. Cosmetic hairline cracks are normal wear and tear. Larger cracks may indicate a problem the landlord needs to investigate.",
        "guide_tools": ["filling-knife", "step-ladder"],
        "category": "Decorating",
        "time": "1 hour",
        "cost": "£6–22",
        "level": "Beginner",
        "difficulty": 2,
        "saves": "Save £80–150 today",
        "uk_specific": False,
        "quick_win": False,
        "skill_points": 20,
    },
    # ---- HEATING ----
    {
        "slug": "boiler-breakdown",
        "fn_name": "BoilerBreakdown",
        "title": "What to do if your boiler breaks down",
        "h1": "What to do if your boiler breaks down",
        "saves_headline": "Save £100–300 today",
        "meta_line": "30 mins · Beginner · Could save you a call-out",
        "meta_title": "What to Do If Your Boiler Breaks Down | FixItFirst",
        "meta_desc": "Boiler broken? Work through this checklist before calling an engineer. Covers error codes, pressure, pilot light, and when to call for help.",
        "before": [
            "Most boiler faults have simple causes — low pressure, a tripped circuit, or an error code with a known fix. Work through this checklist before paying for an engineer call-out.",
            "If you smell gas at any point: do not touch any switches, leave the house immediately, and call the National Gas Emergency line on 0800 111 999.",
        ],
        "tools": [
            ("✓", "Boiler manual", "often kept in a kitchen drawer or downloadable from the manufacturer's website using the model number"),
            ("✓", "Nothing else needed", "all the checks are visual"),
        ],
        "steps": [
            ("Check the pressure gauge", "Look at the pressure gauge on the boiler front. It should read 1–1.5 bar. Below 1 bar means the system needs repressurising — see our repressurising guide. This is the most common cause of a boiler stopping."),
            ("Read the error code", "Modern boilers display an error code when they lock out. Write down the code and search for it along with your boiler model — the manual or manufacturer website will explain the cause and often the fix."),
            ("Press the reset button", "Most boilers have a reset button (often labelled Reset or with a flame symbol). Hold it for 3–5 seconds. The boiler will attempt to restart. If it locks out again immediately, there is an underlying fault."),
            ("Check the condensate pipe", "In freezing weather, the condensate pipe (a white plastic pipe running outside) can freeze and block. Pour warm (not boiling) water over the external section to thaw it. The boiler should restart after a reset."),
            ("Check the electricity supply", "Check your consumer unit — the boiler circuit may have tripped. If the breaker is down, reduce the load on that circuit and reset it."),
            ("Call a Gas Safe engineer", "If none of the above fixes the fault, call a registered Gas Safe engineer. Do not attempt to open the boiler casing or work on the gas supply — this is illegal and dangerous."),
        ],
        "beginners_wrong": [
            "Repeatedly pressing reset without fixing the underlying fault — the boiler will just lock out again and could make the fault worse.",
            "Pouring boiling water on a frozen condensate pipe — use warm water; boiling can crack the plastic pipe.",
            "Ignoring a gas smell to try the checklist — gas smell means leave the building and call the emergency line immediately.",
        ],
        "stop_call_pro": [
            ("You smell gas — leave immediately and call 0800 111 999", True),
            ("The boiler resets but locks out again within minutes", True),
            ("There is water leaking from inside the boiler casing", False),
        ],
        "pro_type": "Gas Safe heating engineer",
        "cost_rows": [
            ("Working through this checklist", "Free"),
            ("Engineer call-out fee", "£80–150"),
            ("Common repair (e.g. pump, valve)", "£150–350"),
        ],
        "learned": "You now know how to diagnose the most common boiler faults, read error codes, and understand when a problem is fixable yourself and when you need a professional.",
        "unlocks": "With this knowledge, you can handle repressurise fixes, frozen condensate faults, and tripped circuits yourself — and have a much more informed conversation with an engineer when you do need one.",
        "last_updated": "March 2025",
        "difficulty_comparison": "No physical work involved — this is a diagnostic guide",
        "completed_count": 4521,
        "renter_warning": "A broken boiler in winter is an emergency. Landlords must fix heating and hot water within 24 hours in cold weather. Contact them immediately in writing, keep a record, and if they do not act, contact your local council Environmental Health team.",
        "guide_tools": [],
        "category": "Heating",
        "time": "30 mins",
        "cost": "Free",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £100–300 today",
        "uk_specific": True,
        "quick_win": False,
        "skill_points": 10,
    },
    # ---- GENERAL ----
    {
        "slug": "turn-off-electricity-fuse-box",
        "fn_name": "TurnOffElectricityFuseBox",
        "title": "Turn off your electricity at the fuse box",
        "h1": "Turn off your electricity at the fuse box",
        "saves_headline": "Essential safety knowledge",
        "meta_line": "5 mins · Beginner · Essential emergency skill",
        "meta_title": "How to Turn Off Your Electricity at the Fuse Box | FixItFirst",
        "meta_desc": "Learn how to turn off your electricity at the consumer unit in seconds. Essential emergency skill every homeowner and renter needs.",
        "before": [
            "Every adult in the home should know where the consumer unit (fuse box) is and how to turn off the power. In an electrical emergency, seconds matter.",
            "Your consumer unit is usually under the stairs, in a hallway cupboard, or in the kitchen. It is a grey or white box with rows of switches inside.",
        ],
        "tools": [
            ("✓", "Nothing needed", "just your consumer unit"),
        ],
        "steps": [
            ("Find your consumer unit", "Look under the stairs, in the hallway, kitchen, or garage. It is a white or grey box, usually mounted at head height, with a hinged cover. Open the cover to see the switches inside."),
            ("Identify the main switch", "At the top or left of the unit is a large switch — usually labelled Main Switch. This controls power to the whole property."),
            ("Turn off the main switch", "Push the main switch firmly to the off position (usually down). All power to the property will cut immediately."),
            ("Turn off individual circuits", "If you only want to cut power to one room, find the breaker labelled for that circuit (e.g. Kitchen Sockets, Upstairs Lights) and switch it off individually."),
            ("Confirm the power is off", "Try a light switch or plug in a phone charger on the circuit you have turned off. No response means the power is off."),
            ("Mark the location", "Stick a label on the consumer unit door or take a photo so everyone in the house knows where it is. Also note the location for future reference."),
        ],
        "beginners_wrong": [
            "Not finding the consumer unit until there is already an emergency — find it now and tell everyone in the house.",
            "Assuming turning off a light switch cuts the power to the wiring — it does not. Only the consumer unit breaker does.",
            "Not confirming the power is off before working on electrics — always test with a lamp or socket tester first.",
        ],
        "stop_call_pro": [
            ("The main switch is already off but the property still has power — there may be a second supply", True),
            ("There is burning, sparking, or a burning smell from the consumer unit", True),
            ("The cover is damaged or the wiring inside looks burnt or scorched", False),
        ],
        "pro_type": "electrician",
        "cost_rows": [
            ("Turning off the electricity", "Free"),
            ("Electrician if consumer unit is faulty", "£100–250"),
            ("Emergency electrician call-out", "£100–250"),
        ],
        "learned": "You now know how to isolate power to the whole home or individual circuits in seconds. This is the most important electrical skill a homeowner or renter can have.",
        "unlocks": "With confidence at the consumer unit, you can now safely replace light switches, change sockets, and do any electrical work — knowing you can fully isolate the circuit first.",
        "last_updated": "March 2025",
        "difficulty_comparison": "The easiest guide on the site — but one of the most important",
        "completed_count": 4872,
        "renter_warning": "Ask your landlord or letting agent where the consumer unit is when you move in. This is basic safety information they should provide. If the unit is locked in a communal area, ask for a key or access instructions.",
        "guide_tools": [],
        "category": "Electrics",
        "time": "5 mins",
        "cost": "Free",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Essential safety knowledge",
        "uk_specific": False,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "read-your-energy-meter",
        "fn_name": "ReadYourEnergyMeter",
        "title": "Read your energy meter",
        "h1": "Read your energy meter",
        "saves_headline": "Prevent overcharging",
        "meta_line": "5 mins · Beginner · Prevents estimated billing",
        "meta_title": "How to Read Your Energy Meter | FixItFirst",
        "meta_desc": "Read your gas and electricity meter correctly in under 5 minutes. Step-by-step UK guide. Submit regular readings to avoid estimated bills.",
        "before": [
            "If you do not submit regular meter readings, your energy supplier estimates your usage — and estimates are often wrong, leading to a surprise bill or an overpayment.",
            "Most homes have two meters: one for electricity and one for gas. Smart meters send readings automatically. If you have a traditional meter with a dial or number display, you need to read it yourself.",
        ],
        "tools": [
            ("✓", "Nothing needed", "just your meter and phone to submit the reading"),
        ],
        "steps": [
            ("Find your meters", "Electricity meters are usually near the front door, in a cupboard under the stairs, or in a hallway. Gas meters are often outside in a box or in the kitchen. If you live in a flat, meters may be in a communal cupboard."),
            ("Read a standard digital meter", "Note down all the numbers on the display from left to right. Ignore any numbers after the decimal point (usually shown in red). Example: if the display shows 01234.5, your reading is 01234."),
            ("Read a dial meter", "Read each dial from left to right. If the pointer is between two numbers, write down the lower number. If the pointer is directly on a number, check the next dial — if it has not passed zero, write down the lower number."),
            ("Read an economy 7 meter", "Economy 7 meters have two readings: Rate 1 (day) and Rate 2 (night). Submit both to your supplier — they use different rates for each."),
            ("Submit your reading", "Log in to your energy supplier's app or website and enter your reading. Alternatively call their customer service line. Do this once a month to keep bills accurate."),
            ("Compare to previous readings", "Your reading should always be higher than the last one. If it is lower, you may have misread the meter. Double-check before submitting."),
        ],
        "beginners_wrong": [
            "Including the red decimal digits in the reading — suppliers only want the whole number.",
            "Reading dial meters in the wrong direction — always read left to right.",
            "Submitting a reading lower than the previous one — call your supplier if you think the meter may be faulty.",
        ],
        "stop_call_pro": [
            ("Your meter reading is going down or staying the same — the meter may be faulty", True),
            ("You cannot find your meter at all — ask your landlord or the property management", False),
        ],
        "pro_type": "energy supplier",
        "cost_rows": [
            ("Reading and submitting yourself", "Free"),
            ("Smart meter installation", "Free — request one from your supplier"),
            ("Engineer to check a faulty meter", "Free — this is the supplier's responsibility"),
        ],
        "learned": "You now know how to read any type of UK energy meter and submit accurate readings. This prevents estimated bills and ensures you only pay for what you actually use.",
        "unlocks": "Once you are reading your meter regularly, you can track your energy use month by month and spot if consumption suddenly increases — which can indicate a faulty appliance or a problem with insulation.",
        "last_updated": "March 2025",
        "difficulty_comparison": "One of the easiest guides on the site — anyone can do this in 2 minutes",
        "completed_count": 6341,
        "renter_warning": "In a rented property, you are responsible for submitting your own meter readings to your energy supplier unless your rent includes bills. Ask your landlord who the supplier is when you move in and register as the account holder.",
        "guide_tools": [],
        "category": "General",
        "time": "5 mins",
        "cost": "Free",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Prevents overcharging",
        "uk_specific": True,
        "quick_win": True,
        "skill_points": 10,
    },
    {
        "slug": "draft-proof-door-window",
        "fn_name": "DraftProofDoorWindow",
        "title": "Draft proof a door or window",
        "h1": "Draft proof a door or window",
        "saves_headline": "Save £50–150 per year",
        "meta_line": "30 mins · Beginner · Saves £50–150 per year on heating",
        "meta_title": "How to Draft Proof a Door or Window | FixItFirst",
        "meta_desc": "Draft proof a door or window in 30 minutes. Step-by-step guide covering self-adhesive foam strips, brush strips, and door sweeps. Save £50–150 per year.",
        "before": [
            "Drafts account for up to 25% of heat loss in older UK homes. Draft proofing is one of the highest return-on-investment home improvements you can make — materials cost £5–15 and pay back in weeks.",
            "Feel for cold air around door and window frames on a windy day — that is where to focus first.",
        ],
        "tools": [
            ("✓", "Scissors or craft knife", "to cut the strip to length"),
            ("✓", "Tape measure", "to measure the frame length"),
            ("✓", "Clean cloth", "to wipe the frame before applying adhesive strips"),
            ("!", "Self-adhesive foam strip", "buy: £3–6 — use E-profile for large gaps, P-profile for small gaps"),
            ("!", "Brush strip or door sweep", "buy: £5–10 — for the gap under an external door"),
        ],
        "steps": [
            ("Identify where the draft is coming from", "On a cold or windy day, hold your hand around the edges of doors and windows. Feel for cold air. Alternatively, hold a lit candle near the frame and watch the flame for movement."),
            ("Clean the frame surfaces", "Wipe the area where you will apply the strip with a damp cloth and allow to dry completely. Adhesive strips do not stick to dusty or greasy surfaces."),
            ("Measure and cut the strip", "Measure each side of the frame and cut the foam or brush strip to length. Cut cleanly with scissors or a craft knife."),
            ("Apply the foam strip to the frame", "Peel the backing off the self-adhesive strip and press it firmly onto the inside of the door or window frame — the surface the door closes against. Work in one continuous length per side where possible."),
            ("Fit a door sweep for the bottom gap", "For the gap under an external door, screw a door sweep to the bottom of the door on the inside. Adjust the height so it lightly brushes the floor when the door closes."),
            ("Test and adjust", "Close the door or window. The draft should be gone. If still present, check for gaps you missed or add a second layer of strip to close a larger gap."),
        ],
        "beginners_wrong": [
            "Using foam strip that is too thick — the door will not close properly. Match the strip profile to the gap size.",
            "Not cleaning the frame before applying adhesive — the strip will peel off within days.",
            "Only doing one side of a window frame — drafts come in at all four sides of a poorly fitting frame.",
        ],
        "stop_call_pro": [
            ("The door or window frame itself is warped or rotten — draft proofing will not help and the frame needs replacing", True),
            ("You have a solid draft at a window despite new strips — the glass seal may be broken (misted double glazing)", False),
        ],
        "pro_type": "tradesperson",
        "cost_rows": [
            ("Foam strip for one door", "£3–6"),
            ("Door sweep", "£5–10"),
            ("Full house draft proofing materials", "£20–40"),
            ("Tradesperson would charge", "£80–150"),
        ],
        "learned": "You now know the different types of draft proofing and where to apply them. This is one of the most cost-effective energy-saving measures available — no specialist skills required.",
        "unlocks": "Once doors and windows are sealed, the next step is loft insulation and cavity wall insulation — the two biggest sources of heat loss in most UK homes.",
        "last_updated": "March 2025",
        "difficulty_comparison": "Easier than filling a hole in a wall — this is mostly measuring and sticking",
        "completed_count": 3187,
        "renter_warning": "Draft proofing with self-adhesive strips is reversible and does not damage the property — this is reasonable maintenance any tenant can do. For door sweeps that need screwing in, get your landlord's permission first.",
        "guide_tools": ["tape-measure"],
        "category": "General",
        "time": "30 mins",
        "cost": "£8–20",
        "level": "Beginner",
        "difficulty": 1,
        "saves": "Save £50–150 per year",
        "uk_specific": True,
        "quick_win": False,
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
        note_part = f'<span className="text-orange-600">buy: {note}</span>' if icon == "!" else note
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
    out = []
    for i, entry in enumerate(items):
        text, has_mb = entry if isinstance(entry, tuple) else (entry, i < len(items) - 1)
        mb = " mb-1" if has_mb else ""
        out.append(f'          <p className="text-sm text-red-900{mb}">{text}</p>')
    return "\n".join(out)


def make_cost_jsx(rows):
    lines = []
    for i, (label, amount) in enumerate(rows):
        if i == len(rows) - 1:
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

    before_paras = "\n".join(
        f'          <p className="text-sm text-gray-700 mb-2">{p}</p>' for p in g["before"]
    )
    tools_warning = (
        f"        <ToolsWarning requiredToolIds={{GUIDE_TOOLS['{slug}']}} />"
        if g["guide_tools"]
        else f"        {{/* No tracked tools for this guide */}}"
    )
    rw = g.get("renter_warning", "")
    renter_block = ""
    if rw:
        escaped = rw.replace("'", "\\'")
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

{make_steps_const(g["steps"])}

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
{make_tools_jsx(g["tools"])}
          </ul>
        </div>
{tools_warning}
        <StepProgress steps={{steps}} slug="{slug}" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
{make_wrong_jsx(g["beginners_wrong"])}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">{stop_title}</h2>
{make_pro_jsx(g["stop_call_pro"])}
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
{make_cost_jsx(g["cost_rows"])}
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
    return f"  '{slug}': [{', '.join(repr(t) for t in tools)}],"


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
