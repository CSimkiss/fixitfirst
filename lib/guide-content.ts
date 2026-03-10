export type TimeEstimate = {
  beginner: string
  experienced: string
  note: string
}

export type Problem = {
  problem: string
  solution: string
}

export type GuideContent = {
  category: string
  timeEstimate: TimeEstimate
  problems: Problem[]
}

export const GUIDE_CONTENT: Record<string, GuideContent> = {
  'fix-a-dripping-tap': {
    category: 'Plumbing',
    timeEstimate: {
      beginner: '45–60 mins',
      experienced: '15–20 mins',
      note: 'Most of the time goes on finding and matching the right washer — take the old one to the shop.',
    },
    problems: [
      {
        problem: "The isolation valve won't turn",
        solution: "Spray WD-40 and wait 10 minutes. If still stuck, turn off the mains stopcock under the stairs or outside instead.",
      },
      {
        problem: "You bought the wrong washer size",
        solution: "Take the old washer with you to the hardware shop to match it exactly — they usually cost under £1.",
      },
      {
        problem: "It still drips after the fix",
        solution: "The brass valve seat inside the tap may be worn. A plumber can re-grind it, or it may be time for a new tap altogether.",
      },
    ],
  },

  'put-up-shelves': {
    category: 'Carpentry',
    timeEstimate: {
      beginner: '1.5–2 hours',
      experienced: '45 mins',
      note: "Finding studs or drilling into masonry takes longest for a first-timer — don't rush the measuring.",
    },
    problems: [
      {
        problem: "Drill bit keeps sliding on the wall",
        solution: "Stick a small piece of masking tape over the spot first — it stops the bit from wandering on smooth plaster.",
      },
      {
        problem: "Wall plug pulls straight out",
        solution: "You may have drilled too small a hole or the wrong plug type for the wall. Use the correct size rawlplug for your screw and wall type.",
      },
      {
        problem: "Shelf isn't level after mounting",
        solution: "Check the spirit level before tightening your final screw. Mark both bracket holes before you drill — a small error at one bracket becomes obvious across a long shelf.",
      },
    ],
  },

  'paint-a-room': {
    category: 'Decorating',
    timeEstimate: {
      beginner: '1.5–2 days',
      experienced: '1 day',
      note: "Prep — filling, sanding, cleaning — takes longer than the painting itself. Don't skip it.",
    },
    problems: [
      {
        problem: "Paint looks patchy when dry",
        solution: "You need a second coat. Let the first dry fully (2–4 hours) and don't over-brush — roll in one direction and leave it alone.",
      },
      {
        problem: "Paint is dripping down the wall",
        solution: "You're loading too much paint. Use thinner coats — a roller should be damp, not dripping — and roll slowly.",
      },
      {
        problem: "Edges look messy near the ceiling",
        solution: "Use an angled brush for cutting in and keep a barely damp cloth nearby to wipe mistakes immediately while wet.",
      },
    ],
  },

  'unblock-a-drain': {
    category: 'Plumbing',
    timeEstimate: {
      beginner: '20–30 mins',
      experienced: '10 mins',
      note: "If the blockage doesn't shift with a plunger in 5 minutes, move to the drain snake — don't keep plunging.",
    },
    problems: [
      {
        problem: "Plunger isn't creating suction",
        solution: "Make sure the cup fully covers the drain and there's enough water in the basin to submerge the cup — air breaks the seal.",
      },
      {
        problem: "Drain clears then blocks again within a day",
        solution: "There's a deeper blockage further down the pipe. Try a drain snake or an enzyme cleaner left overnight.",
      },
      {
        problem: "Water drains slowly but isn't fully blocked",
        solution: "It's a partial blockage — pour boiling water down the drain (not if you have plastic pipes) or use a biological enzyme cleaner overnight.",
      },
    ],
  },

  'bleed-a-radiator': {
    category: 'Heating',
    timeEstimate: {
      beginner: '15–20 mins',
      experienced: '5 mins',
      note: "The hardest part is usually finding the bleed key — have it ready before you start.",
    },
    problems: [
      {
        problem: "Water keeps coming out instead of air",
        solution: "The radiator was already full — close the valve quickly. It just means this one didn't need bleeding.",
      },
      {
        problem: "Radiator is still cold at the top after bleeding",
        solution: "Bleed all radiators in the house, starting furthest from the boiler. A single air lock can affect multiple radiators.",
      },
      {
        problem: "Boiler pressure dropped after bleeding",
        solution: "Top up the system pressure using the boiler's filling loop until the pressure gauge reads 1–1.5 bar, then re-check the radiators.",
      },
    ],
  },

  'fill-a-hole-in-a-wall': {
    category: 'Masonry',
    timeEstimate: {
      beginner: '30–45 mins (plus 1–4 hrs drying)',
      experienced: '15 mins',
      note: "Budget a full day if you need to paint over it — the filler must be fully dry and primed first.",
    },
    problems: [
      {
        problem: "Filler cracks when it dries",
        solution: "You applied it too thick in one go. Build up in layers no more than 5mm thick, letting each layer dry fully before adding the next.",
      },
      {
        problem: "Filler shrinks below the wall surface",
        solution: "Normal for the first pass. Once dry, lightly sand and apply a thin skim coat to bring it flush.",
      },
      {
        problem: "Paint won't stick properly over the filler",
        solution: "Prime the filled area first with diluted PVA (1 part PVA, 4 parts water) or a dedicated filler primer — bare filler is too porous.",
      },
    ],
  },

  'fit-a-curtain-pole': {
    category: 'Fitting',
    timeEstimate: {
      beginner: '45–60 mins',
      experienced: '20 mins',
      note: "Plasterboard walls take longer — you need to find studs or use cavity fixings, which adds time.",
    },
    problems: [
      {
        problem: "Drill bit barely makes a dent in the wall",
        solution: "You've hit brick or masonry — switch to a masonry drill bit and turn on the hammer setting on your drill.",
      },
      {
        problem: "Bracket wobbles or pulls out",
        solution: "The screws didn't catch a stud or the wall plug is too small. Remove them, use a larger plug or toggle bolt, and refit.",
      },
      {
        problem: "Pole isn't straight after fitting both brackets",
        solution: "Measure the height of each bracket from the ceiling, not the floor — floors are rarely level. Mark both positions with tape before drilling.",
      },
    ],
  },

  'change-a-lightbulb': {
    category: 'Electrics',
    timeEstimate: {
      beginner: '5–10 mins',
      experienced: '2 mins',
      note: "Finding a matching replacement bulb is often the longest part — take the old one with you to the shop.",
    },
    problems: [
      {
        problem: "New bulb doesn't light up",
        solution: "Double-check the switch is off when fitting, then on when testing. If still no light, check whether the circuit breaker has tripped.",
      },
      {
        problem: "Bulb won't come out of the fitting",
        solution: "For bayonet caps, push in gently then turn anticlockwise. If stuck, turn off the power and use rubber gloves for a better grip.",
      },
      {
        problem: "Bulb works but flickers",
        solution: "The bulb may not be fully seated. If firmly seated and still flickering, there may be a loose connection — call an electrician.",
      },
    ],
  },

  'fix-a-running-toilet': {
    category: 'Plumbing',
    timeEstimate: {
      beginner: '1–1.5 hours',
      experienced: '30 mins',
      note: "Spend 5 minutes understanding the cistern parts before you start — it saves a lot of guessing.",
    },
    problems: [
      {
        problem: "Toilet still runs after adjusting the float arm",
        solution: "The flapper valve at the bottom of the cistern may also be worn. Inspect it — if it's soft, warped, or discoloured, replace it too.",
      },
      {
        problem: "Water is overflowing from the overflow pipe",
        solution: "The float arm is set too high so water never shuts off. Bend the arm downward slightly (old style) or adjust the float height screw (modern style).",
      },
      {
        problem: "Can't find a matching replacement flapper",
        solution: "Take a photo of your cistern make/model and the old flapper to any plumbers merchant — staff can usually match it in minutes.",
      },
    ],
  },
}
