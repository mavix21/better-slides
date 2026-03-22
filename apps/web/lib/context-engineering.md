## Slide 1: What is an Agent?On Slide:

What is an Agent? An LLM that can take actions in a loop until a task is complete. (Simple diagram: LLM → Action/Tool → Result → Repeat)

### Speaker Notes:

Good [morning/afternoon], everyone. Today we’re diving into Context Engineering for coding agents. But first, let’s ground ourselves in the basics. An agent isn’t just a chatbot—it’s an autonomous LLM that perceives its environment, decides on actions (like calling tools or editing code), observes the results, and loops until the goal is done. This is what powers tools like Claude Code, Cursor, or Devin. Without this loop, we’re stuck with one-shot prompts. Let’s look at how that loop actually works.

---

## Slide 2: The Agent LoopOn Slide:

The Agent Loop

1. Observe – Current context + tools
2. Plan – Reason about next step
3. Act – Tool call / code edit / search
4. Observe result – New data added to contextRepeat until task complete

(Visual: cycle arrow with labels)

### Speaker Notes:

Here’s the classic agent loop. The LLM starts with some initial context, reasons about what to do next, takes an action (e.g., “grep for this function” or “edit file X”), gets the result back into its context, and repeats. This is where real power comes from—but also where most failures happen. The loop can run for dozens of steps in a coding task. If the context gets polluted or missing the right info at the right time, the whole thing collapses. That’s why we’re here.

---

## Slide 3: Why Agents FailOn Slide:

Why Do Agents Fail? • Wrong or missing context (most common)

- Context rot (history bloats, attention fades)
- Attention scarcity (LLM can’t focus on everything)
- Poor tool design or overload Result: Hallucinations, wrong actions, endless loops

### Speaker Notes:

From real-world builds and Anthropic’s research, agents rarely fail because the model is “dumb.” They fail because the context fed into each loop step is wrong, incomplete, or overwhelming. Context rot creeps in as the conversation grows—important details get buried. Transformers have quadratic attention limits, so more tokens = worse focus. This is exactly the problem Context Engineering solves. It’s not about better prompts anymore.

---

## Slide 4: Prompt Engineering → Context EngineeringOn Slide:

Prompt Engineering is Dead

Long live Context Engineering

Andrej Karpathy:

“Context engineering is the delicate art and science of filling the context window with just the right information for the next step.” Prompts = words

Context Engineering = entire information environment

### Speaker Notes:

Andrej Karpathy popularized this shift. Prompt engineering was about crafting the perfect sentence. Context engineering is about architecting everything the model sees at every step of the loop: system instructions, tools, retrieved files, memory notes, history summaries, and more. It’s the new core skill for anyone building reliable coding agents. As Karpathy said, it’s the art of providing all the context for the task.

---

## Slide 5: What is Context Engineering?On Slide:

What is Context Engineering? Curating & maintaining the optimal set of tokens so the LLM gets the right information in the right format at the right time. Anthropic definition: The natural progression beyond prompt engineering.

### Speaker Notes:

Here’s the clean definition from Anthropic and others: Context engineering is building dynamic systems that feed the LLM exactly what it needs—nothing more, nothing less. It includes prompts plus tools, RAG results, memory, compaction, and isolation. For coding agents, this means deciding what goes into the context window for every loop iteration. It’s iterative and happens continuously. This is now the #1 job of AI engineers.

---

## Slide 6: Core TechniquesOn Slide:

Core Techniques • Just-in-time Retrieval – Load only what’s needed

- Compaction – Summarize history (keep signal)
- Agentic Memory – Persistent notes outside window
- Sub-agents – Specialized isolated contexts
- Tool & Skill Curation – Minimal, clear, relevant

### Speaker Notes:

These are the building blocks. Instead of dumping everything upfront, use just-in-time tools (e.g., grep only the relevant file). When the context fills up, compact history intelligently. Store long-term knowledge in notes or files the agent can pull later. Break complex tasks into sub-agents that return short summaries. Curate tools and skills so the agent never gets confused by too many options. These techniques directly fix the failures we saw in slide 3.

---

## Slide 7: Context Engineering in Coding AgentsOn Slide:

Context Engineering in Coding Agents Real-world examples:

- Claude Code – CLAUDE.md + Rules + Skills + Hooks
- Cursor / Windsurf – .rules files + skills
- LangChain / LlamaIndex – Middleware + dynamic context Result: Production-ready code on large codebases

### Speaker Notes:

Let’s get concrete for coding agents. Martin Fowler’s deep dive shows Claude Code uses a CLAUDE.md file for global rules, scoped “rules” files for file types, lazy-loaded “skills” for on-demand knowledge, and hooks for automation. Cursor and Windsurf do similar with rules and skills. LangChain adds middleware to tweak context at every loop step. These aren’t nice-to-haves—they turn unreliable agents into tools that ship real production code in brownfield projects.

---

## Slide 8: Best Practices & ToolsOn Slide:

Best Practices • Start minimal → iterate on failures

- Use markdown for rules/skills/specs
- Lazy-load + compress aggressively
- Isolate contexts (sub-agents, environments)
- Make codebase “AI-friendly” (clear structure) Tools: MCP servers, Skills, Agentic memory, Summarization middleware

### Speaker Notes:

Practical tips: Always start with the smallest high-signal context and add only when the agent fails. Everything lives in markdown files—easy to version and share. Lazy-load skills and use aggressive compaction. Isolate contexts so one bad file doesn’t poison everything. Tools like Model Context Protocol (MCP), custom skills, and built-in summarization make this scalable. Developers who master this spend less time babysitting agents and more time on architecture.

---

## Slide 9: Benefits & ChallengesOn Slide:

Benefits

- 60–80% more reliable multi-step tasks
- Lower cost & latency (86% reported in some cases)
- Agents that actually improve over time Challenges
- Context rot still possible
- Non-determinism requires human oversight
- Sharing context across teams/environments

### Speaker Notes:

The payoff is huge: agents become dramatically more reliable on complex coding tasks, with big wins in speed and cost. Some internal benchmarks show 10%+ performance lifts without changing the model. But challenges remain—context can still rot if not managed, LLMs are probabilistic so you still need oversight, and sharing setups across teams isn’t trivial. The industry is moving fast here.

---

## Slide 10: How to Get Started & Future OutlookOn Slide:

How to Start Today

1. Add a CLAUDE.md or rules file to your project
2. Experiment with skills & just-in-time tools
3. Implement one compaction or memory note strategy
4. Measure loop success rate before/after

Future: Context engineering = the full-stack of AI agents Questions?

### Speaker Notes:

To wrap up: Start small—drop a CLAUDE.md with your team’s conventions, add one skill, and try just-in-time retrieval in your next coding session. Track how many fewer corrections you need. The future is clear: context engineering is becoming the full-stack discipline for building reliable agents, replacing prompt engineering entirely. We’re only at the beginning. I’d love to hear your questions or see what you build next. Thank you! (End with key sources: Anthropic, Martin Fowler, Karpathy, LangChain)
