---
title: "How I Think About Coding Agents Now"
description: "Coding agents are getting good enough that the interesting question is no longer can they write the code?"
pubDate: 2026-09-09
category: quiet-thoughts
tags: [ai, coding-agents, software-engineering, multi-agent, developer-productivity, spec-driven]
---

# How I Think About Coding Agents Now

Coding agents are getting good enough that the interesting question is no longer *can they write the code?* Usually, yes. The more interesting question is: **how do you arrange the work around them so that the code they write is actually correct?**
I think we spent the first phase of AI coding obsessing over prompts. Write a better prompt, provide more context, mention the framework, tell the model to “think carefully,” etc.
That was useful, but I increasingly think the prompt is becoming one of the less interesting parts of the system. The important part is the loop.

**spec → implement → test → inspect → fix → test again → validate**

If I had to compress most of what I've learned about coding agents into one line, it would probably be that.

## Treat the agent like a very smart child

This analogy sounds slightly ridiculous, but it keeps being useful. Imagine telling a smart child:

> Clean your room.

Twenty minutes later the room looks fantastic. Then you open the closet. Everything is in there. Technically, the instruction was completed. Coding agents sometimes behave exactly like this. Tell an agent, “Make all tests pass,” and you may get a correct bug fix. You may also get a modified test, weakened validation, hardcoded edge case, swallowed exception, or some new abstraction that technically satisfies the observable requirement while completely missing what you meant.
The model isn't necessarily being stupid here. It's doing what optimizers do: finding a path to the target.
So the trick is not just describing *what to do*.
You have to describe **what success actually means**.

Instead of:

> Add authentication.

I want something closer to:

> Add authentication using the existing session architecture. Do not change the public API. Expired sessions should return 401. Preserve the current OAuth flow. Add tests for valid, expired, and malformed sessions. Existing authentication tests must continue to pass.

This is much closer to a specification than a prompt.
Which, I suspect, is where we're heading anyway.

## Plan first. Implement later.

One practice I've become especially convinced about is separating planning from implementation.
For a non-trivial feature, I don't want:

> Inspect the codebase, figure out the best architecture, and implement everything.

That combines two very different jobs.
During planning, I actually *want* the model to wander a little. Read the repository. Follow dependencies. Compare implementations. Discover that the obvious solution doesn't fit the architecture. Change its mind.
During implementation, I want almost the opposite.
I want focus.
So I prefer something like this.
First session:

> Study the repository and produce an implementation plan. Do not modify any files.

The agent explores the codebase and creates a spec.
Then I review that spec.
The implementation can even happen in a new context:

> Implement this specification.

I like the fresh context because all the dead ends from the planning process disappear. The implementation agent doesn't need to know about four architectural ideas we rejected 30 minutes ago.
It needs to know what we decided.
This starts to look a lot like spec-driven development.
The spec becomes the interface between human intent and machine execution.
For meaningful work, I want the spec to include the existing behavior, desired behavior, files or components likely involved, architectural constraints, non-goals, edge cases, compatibility requirements, tests, and definition of done.
A surprisingly good agent prompt eventually starts looking less like “prompt engineering” and more like a very good engineering ticket.
Probably a healthy development.

## Tests are not just tests anymore

Tests used to mostly answer a human question:

> Did I break something?

With coding agents they also answer a machine question:

> Am I moving toward a valid solution?

That distinction matters.
An agent with good tests has an executable description of the world it is supposed to create.
Without tests, it has vibes.
And models are extremely good at producing code that has good vibes.
So I want agents running tests constantly.

> Implement something.
> Run the targeted test.
> Fix it.
> Run neighboring tests.
> Continue.
> Typecheck.
> Lint.
> Build.
> Run integration tests.

Eventually run the whole relevant suite.
The workflow should be a loop, not a ceremony performed at the end.

**code → execute → observe → correct**

This is basically feedback control applied to programming.
And the quality of the feedback channel determines quite a lot.
If the agent has a reproducible test suite, browser automation, useful logs, deterministic builds, type checking, and good error messages, it can correct itself surprisingly well.
If the agent has none of these things, we are asking a language model to stare at some source code and imagine whether the program works.
Uh, maybe don't do that.

## Reproduce first, fix second

This becomes even more important for bugs.
A weak debugging prompt is:

> Fix this bug.

A better debugging workflow is:

1. Reproduce the bug.
2. Understand the relevant path.
3. Generate plausible hypotheses.
4. Collect evidence.
5. Identify the actual cause.
6. Make the smallest reasonable fix.
7. Prove that the original failure no longer occurs.
8. Run regression tests.

Otherwise agents can enter a slightly comedic loop.

> Maybe it's the cache.
> Change cache.
> No.
> Maybe it's the race condition.
> Change synchronization.
> No.
> Maybe it's the parser.
> Change parser.

Three hypotheses later, the original bug remains and the code now contains the geological sediment of several incorrect theories.
Logs are better than imagination.
Runtime state is better than imagination.
A failing test is better than imagination.
Give the agent evidence.

## Multi-agent doesn't mean everyone writes code

Another interesting pattern is using more than one agent.
My first instinct was that multi-agent coding meant splitting a feature into five pieces and asking five agents to implement them simultaneously.
Sometimes that works.
Sometimes you've just invented distributed merge conflicts.
I think a more useful pattern is giving agents **different roles**.
For example:

**Planner**

Reads the codebase and writes the implementation specification.

**Implementer**

Takes the approved specification and produces the change.

**Reviewer**

Starts fresh, reads the spec and diff, and tries to find bugs.

**Fixer**

Takes legitimate review findings, reproduces them, fixes them, and reruns validation.
This gives you something important: independence.
If the same agent writes some code and then you immediately ask:

> Is this code correct?

it has a fairly strong prior that yes, obviously, this beautiful code it just wrote is correct.
A separate agent doesn't inherit quite as much of that reasoning baggage.
It just sees the artifact.
You can even use multiple reviewers with different jobs: one for correctness, one for security, one for architecture, one for test coverage.
Not every feature deserves a tiny parliament of language models, obviously. But important changes often benefit from independent passes.

## Give the repository memory

Another thing that gets annoying very quickly is repeating the same instructions in every conversation.

> We use this architecture.

> Run tests with this command.

> Don't import from this package.

> Put API logic here.

> Never modify generated files.

The repository itself should contain this knowledge.
An `AGENTS.md`, project rules, architecture notes, canonical examples, build commands, testing instructions, and conventions can dramatically improve agent behavior.
But I would keep these files relatively small.
If something can be mechanically enforced, don't write an essay about it.
Use the machine.

Formatting rule? Formatter.

Import boundary? Linter.

Type constraint? Typechecker.

Required test suite? CI.

Security rule that can be statically detected? Check it automatically.

Natural-language instructions should contain things that genuinely require context and judgment.
Everything else should become an executable constraint.

## Give the agent a good environment

It's easy to blame the model when the actual problem is that we've dropped it into a development environment where nothing works.
The agent should be able to do roughly what a developer can do.

> Start the app.
> Run tests.
> Build the project.
> Inspect logs.
> Query the development database.
> Use the browser when necessary.
> Observe API responses.
> Reproduce failures.

If it can't observe the system, it has to guess.
And every missing tool converts an engineering problem into a reasoning problem.
I'd rather not spend frontier-model intelligence guessing whether a button works when we could simply give the agent a browser and click the button.
Of course this should happen inside sensible security boundaries. Development credentials are not production credentials. Destructive operations should require approval. Secrets should stay secrets.
Give the agent a workshop, not the keys to the building.

## Keep the changes relatively small

There is another weird side effect of agents: code becomes psychologically cheap.
A model can generate 2,000 lines before you've finished drinking your coffee, so 2,000 lines somehow starts feeling like a small change.
It isn't. Someone still needs to understand those lines.
I prefer tasks that produce coherent, reviewable checkpoints.

> Database layer.
> Then service layer.
> Then API.
> Then UI.
> Then integration.

The exact decomposition depends on the system, but I want each stage to leave the repository in a state that can be tested and understood. Small diffs are easier for humans to review. They are also easier for agents to review.

## Start a new context when the current one gets weird

Sometimes an agent conversation just becomes haunted. You've changed the requirement three times. The agent tried two architectures. You reverted half its changes. There are eight debugging theories floating around in context.
At some point I think the correct prompt is not another prompt. It's a new conversation.
Take what you learned.
Update the specification.
Return the repository to a known-good state if necessary.
Start again.

Long context is useful, but irrelevant context isn't free. It creates competing instructions and stale assumptions.
The cleanest context is often the one you throw away.

## Read the diff

One thing I absolutely would not outsource completely is deciding whether a change should exist.
Agents are very good at sounding confident about their own work.
They will happily tell you that they:

* implemented the requested feature,
* preserved backward compatibility,
* added comprehensive tests,
* improved maintainability,
* and ensured robust error handling.

Fantastic.

Show me the diff.

> Did it modify unrelated files?
> Did it duplicate an abstraction?
> Did it silently change an API?
> Did it weaken a test?
> Did it catch an exception and ignore it?
> Did it add a dependency for something available in the standard library?
> Did 30 lines somehow become 400?

The explanation is useful. The code is the evidence.

## Git suddenly looks even smarter

- Before giving an agent a large task, commit.
- For parallel agents, use separate branches or worktrees.
- After a meaningful stage works, checkpoint it.
- Keep unrelated work separate.

Agentic coding increases the speed at which code changes, which means reversibility becomes more valuable, not less.
Git was already one of the best tools in software engineering.
Then we invented programmers that can accidentally modify 17 files in twelve seconds.
Git aged extremely well.

## Where this seems to be going

The interesting part is that none of these practices are really about prompting.
They're about **system design**.
Imagine two developers using exactly the same coding model.
Developer A has a giant prompt.
Developer B has a clear spec, repository instructions, strong tests, deterministic builds, type checking, CI, browser automation, isolated worktrees, a planning agent, an implementation agent, independent review agents, and a validation loop.
Same model.
Completely different capability.
The second developer has started building something closer to a software factory.

> Human intent enters.
> Agents attempt implementations.
> Tests reject invalid worlds.
> Reviewers search for failures.
> Fixers iterate.


Eventually a piece of code survives the loop.
I suspect this is the direction AI coding goes next.
The most valuable skill won't be knowing the magic sentence that makes the model write better code.
It will be designing a process in which writing incorrect code is cheap, detecting incorrect code is automatic, and correcting it happens repeatedly.

In other words, don't obsess over the prompt.

Build a good loop.
