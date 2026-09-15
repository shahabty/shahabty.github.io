---
title: "Working Across Research and Product Delivery"
description: "R&D and product delivery share engineering skills, but they measure progress, failure, and good work very differently."
pubDate: 2026-09-15
category: field-notes
tags: [research, product, engineering, rd, delivery]
---

Working across both research and development and product delivery has made me realize how different the two environments can be, even when the people involved have very similar engineering backgrounds.

Both involve solving hard problems, writing code, making technical decisions, collaborating with others, and eventually trying to create value. But the way progress is measured, how failure is interpreted, what you optimize for, and even what “good engineering” looks like can be very different.

Neither approach is better than the other. They simply operate under different goals.

Understanding those differences is useful for anyone moving between the two, especially because habits that make you effective in one environment do not always transfer directly to the other.

## Product Starts With the Customer. Research Starts With the Question.

In product delivery, the customer is usually the strongest constraint.

You are trying to solve a real problem for someone, which means usability, reliability, cost, performance, deadlines, and customer expectations all matter. A technically impressive solution that does not solve the customer's problem is usually not a successful product.

Research begins from a different place.

The center of the work is usually a question, hypothesis, limitation, or unknown.

Can this architecture scale further? Can we reduce memory usage in a fundamentally different way? Does this approach actually outperform the existing one? Is a limitation inherent to the system, or are we simply approaching the problem incorrectly?

The immediate customer is therefore less central. What matters first is whether the question is worth answering and whether the experiment gives us reliable information.

Sometimes that information eventually becomes a product.

Sometimes it does not.

Both outcomes can still be valuable.

## The Time Horizon Is Different

Product delivery tends to live much closer to the present.

There is usually something that needs to work today, this quarter, or within the next few releases. Customers are waiting, other teams have dependencies, and there is often a relatively visible connection between the engineering work and its impact.

R&D is much more focused on the future.

You might spend weeks exploring an idea whose impact will not be visible for months or years. In many cases, the work may never have direct product impact at all.

That does not necessarily make it unsuccessful.

Research can increase an organization's understanding of what is possible, identify technical limits, uncover new directions, or show that an idea is not worth pursuing.

The output is not always a feature.

Sometimes the output is knowledge.

## Failure Rates Are Naturally Higher in Research

One of the biggest differences I have experienced is the relationship with failure.

If most product projects fail to produce something useful, there is probably a problem somewhere. Maybe requirements were wrong, execution failed, prioritization was poor, or the team built something customers did not actually need.

In research, failure is much more normal.

You might investigate five or ten directions before finding one that works well enough to continue.

Sometimes none of them work.

But that does not mean nothing was accomplished.

An experiment can prove that a promising idea does not scale. It can reveal a hidden limitation. It can show that improving one metric hurts three others. It can demonstrate that a complicated solution performs no better than the simple baseline.

Those are useful findings.

In fact, research is sometimes about discovering what **should not be done at all**.

That can save far more engineering time than the original experiment cost.

The important distinction is between an experiment that failed and an experiment that taught you nothing. Those are not the same thing.

## Code Has a Different Purpose

This difference becomes very visible in how code is written.

In product delivery, code is part of the product itself. It may need to survive for years and be understood by many engineers. Architecture, testing, maintainability, observability, backward compatibility, security, performance, and documentation all become important.

The cost of poor design accumulates over time.

Research code often has a different purpose.

The code is there to test an idea.

Sometimes the best research implementation is not the most elegant architecture. It is the fastest reliable way to determine whether the hypothesis is worth pursuing.

Spending several weeks building abstractions around an experiment that may be discarded tomorrow can actually reduce research productivity.

That does not mean research code should be chaotic.

Reproducibility still matters. Experiments need to be trustworthy. Someone should be able to understand what was tested and why the result happened.

But the optimization target is different.

In product delivery, the code is often part of the artifact.

In research, the code is often an instrument used to produce evidence.

The engineering standards naturally change once the experiment starts moving toward production.

## Progress Looks Different

Product progress is relatively easy to explain.

A feature shipped. Latency dropped by 30 percent. A bug disappeared. A customer was onboarded. Reliability improved. Infrastructure cost decreased.

Research progress can be less visible.

You may spend two weeks testing an approach and end up with exactly the same product you had before.

But perhaps you now know that the proposed approach will not work.

That is still progress because uncertainty has been removed.

This is one reason documentation becomes extremely important in R&D.

Experiments, assumptions, unexpected results, strange bugs, failed approaches, configuration details, and conclusions should be preserved. Otherwise, research organizations develop an unfortunate habit of rediscovering the same failed ideas every few months.

A good research history tells future engineers not only what worked, but also what was tried and why it was abandoned.

## Planning Has Different Levels of Certainty

Product development usually allows more structured planning.

There are still surprises, of course, but once the solution is reasonably understood, a project can often be broken into components, dependencies, milestones, testing phases, and releases.

Research planning is more uncertain because the result of the experiment affects what happens next.

A research roadmap therefore often looks more like a decision tree than a traditional project plan.

Try approach A. If the result is promising, explore B. If it fails for a particular reason, investigate C. If the underlying assumption is wrong, stop the project entirely.

This also makes estimating research difficult.

You can estimate the cost of running an experiment.

You cannot reliably estimate when you will discover the answer you were hoping for.

That difference is important when communicating research work to people who are more familiar with product timelines.

## The Definition of Impact Changes

Product impact is usually visible through users or the business.

More customers use something. Revenue increases. Support tickets decrease. A workflow becomes faster. Reliability improves.

Research impact can be indirect.

A research project might create a technique that another team uses six months later. It might identify a hardware limitation that influences the next architecture. It might prevent the company from investing in an expensive direction.

Or it may simply improve the team's understanding of a difficult problem.

That makes research harder to evaluate using traditional product metrics.

Not every valuable piece of research becomes a product.

At the same time, research cannot be completely disconnected from usefulness either. Interesting technical problems are almost infinite, while engineering resources are not.

Good R&D therefore needs some connection to potential future value, even if that value is much less immediate than in product delivery.

## The Working Mindset Changes Too

Product delivery often rewards discipline.

You need to finish things, handle edge cases, communicate clearly, coordinate dependencies, maintain quality, and avoid breaking what customers already rely on.

Research requires more exploration.

You need to be comfortable questioning assumptions, trying ideas that may sound strange, changing direction, and admitting that an approach you spent several weeks on does not work.

Both require curiosity and discipline, but in different proportions.

On the research side, a useful question is often:

**What don't we understand yet?**

On the product side, it is more often:

**What does the customer need us to make dependable?**

Moving between these two modes means adjusting the way you think rather than simply applying the same process everywhere.

## Research Becoming Product Is a Separate Phase

One of the most interesting moments is when research actually works.

The prototype proves that an idea is viable, and suddenly the question changes.

It is no longer:

“Can we make this work?”

Now it becomes:

“Can we make this reliable enough for thousands of people to depend on?”

That transition introduces an entirely new set of problems.

The experiment may have worked on one dataset, one machine, one environment, or one carefully controlled configuration. A product has to handle everything else.

Now maintainability matters much more. Cost matters. Monitoring matters. Failure recovery matters. Security, usability, edge cases, deployment, testing, and documentation matter.

A prototype proves possibility.

Product engineering proves dependability.

They are related, but they are not the same achievement.

## Working on Both Sides

Working across both R&D and product delivery has made me appreciate that each side teaches a different type of engineering judgment.

Research teaches you to live with uncertainty, question assumptions, design experiments, and accept that useful work does not always result in something that ships.

Product delivery teaches you that an idea has limited value until it can reliably solve a problem for someone.

Research asks us to explore what might be possible.

Product delivery asks us to turn useful possibilities into something people can actually depend on.

Sometimes research produces the technology behind the next product.

Sometimes it simply tells us which road not to take.

And sometimes that second result is just as valuable as the first.
