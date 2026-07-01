---
title: "The lethality of training on human feedback"
preview: "Human operators are fallible, breakable, and manipulable.  Human raters make systematic errors - regular, compactly describable, predictable errors.  To faithfully learn...."
date: "13th JAN 2024" 
author: Sharat Jacob Jacob
---


Distilled conversation between Eli Tyre and John Wentworth on the following item from the List of Lethalities by Eliezer Yudkowsky: 

> 20\.  Human operators are fallible, breakable, and manipulable.  Human raters make systematic errors \- regular, compactly describable, predictable errors.  To faithfully learn a function from 'human feedback' is to learn (from our external standpoint) an unfaithful description of human preferences, with errors that are not random (from the outside standpoint of what we'd hoped to transfer).  If you perfectly learn and perfectly maximize the referent of rewards assigned by human operators, that kills them.  It's a fact about the territory, not the map \- about the environment, not the optimizer \- that the best predictive explanation for human answers is one that predicts the systematic errors in our responses, and therefore is a psychological concept that correctly predicts the higher scores that would be assigned to human-error-producing cases.

## What Eliezer claims by this

A standard approach to train a Reward Model is to have humans who interact with the AI system give high ratings for good actions taken by the AI and low ratings for bad actions. The Reward Model learns to predict what actions get higher ratings. This would, hypothetically, result in the AI determining what qualifies as a good action. This approach is roughly the basis for RLHF, Reinforced Learning from Human Feedback.

However, Eliezer reminds us that humans make mistakes. And not just random ones, humans also make a significant number of predictable mistakes. This means humans will provide an incorrect understanding of what a good action is through their ratings. 

The correct answer for predicting what actions will get high ratings from **humans** is to learn the mistakes that we make. It also means learning how high ratings will be given by humans to situations where humans generally make mistakes.

Thus, Eliezer claims that training a Reward Model to take actions that it predicts will get high ratings from humans, who make predictable mistakes, is **lethal** for those humans.

## Eli Tyre’s main confusion about lethality

Why lethal?

The Reward Model will indeed be a little off because of biases present in the humans that rate it. This is a mild safety issue (considering how in extremely specific edge cases, this model might fail). But why is this a **catastrophic** safety issue?

Why is it highly vital that the Reward Model be perfect and perfectly understand what are human-preferred actions in all domains, to ensure it doesn’t **kill** us? As in, what is wrong with it being a little off in a manner we are familiar with (since we are already aware of the nature of human biases)? 

## John corrects certain assumptions

The word “biases” is incorrectly used here since biases usually mean “data that is approximately correct but slightly off”. However, in real life, in many situations, **human ratings are far off from what humans actually want.** (For the reader, this need not naturally make sense, don’t worry, explanations and examples will be provided below.)

The Reward model doesn’t need to be perfect either. Being a little off is fine, as long as it’s ***only** upto a little off* ***everywhere*** and not more than that*.* But again, that’s unlikely to happen with human ratings because ratings are likelier to be far off, so a Reward Model trained on those ratings would be far off as well.

## Eli elaborates on why RLHF 

Suppose you teach a highly capable system to care about what its outputs should **look like** to someone observing. Then, yes, instead of learning **the strategy you desire** that produces those outputs, the obvious **best strategy** for the system is to control what the observers see and ensure nothing disrupts its control.

But with RLHF, it seems like you teach the system a mixture of “what looks good” and “what is actually good”. You aren’t just observing, you are clearly instructing from the start by giving ratings to each action performed by the system. Even if you make predictable mistakes, there seem to be certain unshakable concepts of “what is actually good” that you will teach.

Wouldn’t some amount of “what is actually good” be learned by the system? And wouldn’t that prevent any supervillainy control-the-observer strategies?

## John explains why human ratings are terrible 

In general, we start with a few examples that aren’t world-ending but display how humans are terrible at measuring concepts like happiness. 

> When you buy a pricey dish, you display three distinct types of happiness at different levels, before, after, and during consumption. 
> Before consumption, you may be concerned by the price but find the taste alluring.   
> During consumption, the taste may be all that matters.   
> After consumption (maybe a week later), memories of the taste might be foregone, but the price left a void in your wallet so you feel regret. Or vice versa, where you have forgotten all your despair over buying something pricey, and only relish the memory of the taste. 

The scenario in which you consumed the food might also affect your memories of how the dish tasted, which indicates how you might have rated the same dish. Consumed during a breakup? Bland and tasteless. Consumed on a first date? Fascinating, but uncertain if worth it. Consumed right after you convinced someone to marry you? The best dish ever, simply delicious\!

If we had a perfect understanding of what makes us happy, then outside of situations outside our control, we would always be happy.  But we still take actions that bring us unhappiness, such as giving into our cravings while trying to lose weight and sacrificing long-term happiness for temporary joy.

## Eli asks about a possible cluster of happiness 

Sure, happiness is a difficult concept to target accurately, and we would need a lot of philosophical work to transform our understanding of happiness from something intuitive to something concrete in nature.

Is that necessary to have aligned AI though?

If I gave an AI system a trillion examples of clearly happy scenarios to me, like picnics, theme parks, circuses, roller coasters, and so on, wouldn’t it define a common concept of happiness within these situations? 

It wouldn’t be precise to my concept of my happiness and as you mentioned, I don’t have a precise understanding of my happiness that I can pin down. But I have a fuzzy cloud that maps to my idea of my “happiness”. 

It seems like with my trillion examples represented as a trillion data points, they would form this fuzzy cloud-like cluster, which roughly represents my concept of “happiness”. Forming this cluster in the concept space of the AI system would give it a specific volume within which it can reliably take actions that would be happy in nature. 

We wouldn’t need a precise targeting of the concept. But just binding all “actions that make us happy” within a specific volume seems like it would suffice.

## John elaborates on happiness saying the clusters can be separate and not hint at a bigger concept as a sum

The fuzzy cloud-concept of “happiness” doesn’t seem like it would be a single huge cluster that one can refer to without any confusion. 

Instead, having discussed earlier the misrepresentations of happiness such as temporary happiness, long-term happiness, predicted happiness, remembered happiness, mixed-feelings happiness, and various others that people confuse for what “happiness” truly is, the larger likelihood is that the cloud-concept will be various smaller clusters distinct from each other that don’t form a mega cluster. (Both choosing to eat fast food and choosing not to eat fast food will fall into two different clusters (if the clusters were “short-term happiness” and “long-term happiness” respectively) for the same individual.)

One may be referring to one specific cluster and get an action from an entirely different cluster, which is certainly what isn’t desired. 

This would be akin to what John explains as:

Imagine that Alice says "I want a flurgle. Maybe flurgle means a chair, maybe a petunia, maybe a volcano, or maybe a 50-year-old blue whale in heat, not sure." and then Bob responds "Great, here's a petunia.". Like, the fact that \[Alice doesn't know which of these four things she wants\] does not mean that \[by giving her one of the four things, Bob is giving her what she wants\]. Bob is actually giving her a maybe-what-she-wants-but-maybe-not.

## John details the internals of his aligned model, and explains how the concept may constructed but the model need not be aligned to that specific concept 

Irrespective of whatever the model treats as the concept of “happiness”, it’s also not necessary that the model needs to be aligned to such a concept. This is better explained by what we think of the internals of our model to be like (outlined below).

We think of the model developing concepts of various things over time in training to accomplish tasks, such as a full cup of coffee, a painted wall, and more. It would also develop more abstract concepts (that are hard to pin down, as mentioned before) of happiness, anger, and more, within a concept space. 

We also think the model has a mechanism of being able to point at these concepts as a specific target for internal processes. The model can execute an internal inference process (that tries to learn more about the target concept), an internal communication process (that assigns the appropriate human words for the target concept) or an internal planning process (that designs a strategy to achieve the target concept).

The model may construct the required concept of “happiness” during training.  
But what we consider “alignment” in this scenario is to place that concept as the desired target for the planning process. And this need not naturally happen, especially in the case of training based on human ratings. (Explained below)

## John also says throwing pressure at the model to point at the concept (through means of a rating process) won't align it to the concept, but at whatever the model’s concept of the rating process is 

So our next step, after getting the model to construct a concept of “happiness”, is to set it as the target for the model’s planning process.

When we try to achieve this through humans giving high ratings for “happy” situations, we aren’t instructing the model to aim for “happy” situations but to aim for high ratings. This seems like it would achieve the same goal, but instead of the model targeting the concept we desire, the model targets the concept of the rating process that it has constructed.

Borrowing an example from Ajeya Cotra, this is akin to an academically brilliant English literature student being aware of what political biases their professor possesses. The student has a good mental concept of what a neutral essay is. But they also understand that an essay, with political biases that appeal to the professor, is likelier to get higher marks.

## Eli wonders if its like inner and outer alignment, says happiness should be interrelated clusters by intuition, tries to define what John means

It seems more like there would be a set of clusters that are correlated to form the mega cluster that forms the fuzzy cloud of “happiness”. It seems doubtful that the subclusters wouldn’t be entirely correlated. 

Also, it seems like aligning the model to target a specific concept an inner alignment-outer alignment distinction. 

However, so far, to be clear, the scenario appears to be: 

1. The model constructs a concept of “happiness” in its concept space.  
2. The model also, being trained to get high ratings, develops a concept of its rating process.  
3. The model targets the concept of its rating process for its planning process since that yields higher ratings. 

## John explains the distinction between that and this, explains Eli got the explanation spot-on 

The scenario outlined above is accurate.

But this is a slightly different situation in comparison to inner-outer alignment.  
“Outer alignment” vs “inner alignment” corresponds to “an external feedback signal (that stands for what I want) that the AI is optimized for” vs “the AI internally has an optimizer that is optimized for what I want”. (For a loose definition, think of “optimized for” as having a specific strategy and “optimizer” as a strategy-chooser.)

This scenario is the distinction between “the AI constructs this concept of what I want” and “the AI optimizes for (ie, its planning process targets) this concept”.

When you give high ratings to the AI for taking actions that lead to “happiness”, i.e., pressuring the AI to pursue high ratings, the AI is better off targeting the concept of the rating process rather than the concept of “happiness”. 

## Eli wonders about the reasoning that happiness would make its way only into the concept space and not the motivation space of the model, and tries to outline why

So the idea here is that the AI does figure out maybe a reasonable concept of “happiness” in its concept space. However, the motivation space of the AI system, where it’s pointed at concepts to execute strategies to achieve those concepts, is shaped by the rating process, regardless of what concepts are constructed.

## Eli doesn't see what’s wrong with the rating process being optimized for, as to whether that would be truly catastrophic 

What makes optimizing for the rating process catastrophic in nature?   
The rating process only rewards “happy” actions anyway.

## John outlines scenarios where the rating process is optimized for as opposed to where the concept the rating process points to is optimized for

Our AI, as discussed thus far, constructs concepts, and targets concepts for its planning process. Since it’s trained with human ratings, it targets the concept of the rating process, i.e., it takes actions that it believes will get high ratings from humans.

In training, this seems to get the same result as targeting the concept of “happiness” from the POV of the human raters, otherwise, this AI doesn’t get released to the public. Increasing factory profits, planning exciting vacations, improving the house, etc., the AI takes all the actions that, when submitted to the human raters, get high ratings.

After release, the AI gets the chance to interact with the world, self-improve, and/or build successors. This allows it to become fairly more powerful if it yet isn’t.   
Note that, the AI is still optimizing for actions that get high ratings.

Now, there’s a broad set of actions that the AI can take to get high ratings based on its concept of what its rating process is like at this point, with increased awareness and capabilities.

Suppose the concept is “a human looking at snapshots of the world at a specific place and a specific time, and giving high/low ratings based on what the snapshot shows”. In that case, the AI can try to predict what the camera taking that snapshot would show, such that the human gave a high rating. Then it has to take actions to adjust the conditions of that place within the time left for the snapshot to be taken to get the desired rating.

If the concept is “humans in a room somewhere physically entering a rating into a system”, then the AI can find these humans and put them in a mechanical suit that only enters in high ratings for any action performed, guaranteeing consistent high ratings.

If the concept is “software where the humans record the rating in a table”, then the AI can just hack into the system and fill the table with high ratings.

## Eli considers this classic “reward misspecification”, and thinks such behaviors would be removed at the start when its forming an idea of concepts and motivations, Eli brings up the fact that in training, the models will be taught not to harm the human raters

The examples above seem to be the usual problem of “reward misspecification”, where you struggle with labeling your goal concretely. (If you give a vacuum cleaner the end goal of a “blank clean floor”, this might result in the vacuum cleaner removing footwear, plant vases, etc.) 

But with RLHF, we would be teaching the AI various core principles/instincts/urges from the start by rating actions such as “don’t harm humans” or “don’t make people unhappy” or “don’t break valuable things, unless necessary” and so on. This is done in training and any actions taken by the AI to break these rules would be severely penalized, i.e., assigned a negative rating. 

We would also put it in a simulation with simulated humans giving simulated ratings, and give low ratings to any actions that involve controlling the simulated human raters.

If the AI performed these rule-breaking actions after deployment, then wouldn’t that mean the training did not work? It would mean the AI was completely aligned to its concept of the rating process and not at all to the concept of “happiness”. Is that realistic?

## Eli thinks the model generalizes between A and B, where A is simple generalization, and B is generalization to the point of deviation from what they actually wanted the model to learn 

I am visualizing a spectrum of generalization from A to B, where the model doesn’t generalize far beyond A.

A is where the model generalizes from taking in high-rated actions like “don’t punch the human”, “don’t stab the human”, “don’t pinch the human”, etc., to learn a general principle/rule of “do not harm the human in any way”. This principle guides the model in the future in taking new actions, such as “don’t poison the human”, knowing they will get high ratings.

B is where the model generalizes so far that it treats every rated action as the output of a rating process, rather than constructing principles from the rated actions themselves (like it did in A) that would point at the concept of “happiness”. Once you reach this point, the model operates along the lines of “these actions get high ratings, so I must take actions that give me high ratings” (which includes the examples mentioned above of controlling human raters). The safety of the rated actions themselves is lost. 

I think the model wouldn’t generalize far beyond A, especially all the way to B

## John explains in the situation where the model is aware of its training process, the model isn't being trained to **not harm human raters**, instead the model is being trained to **not harm human raters during training** because that’s the action that get penalized 

This isn’t quite “reward misspecification”, which is why we needed that conversation about the internals of our model.

Our highly powerful model is capable of internally building the concept of the rating process. This also means the model’s concept of the rating process includes situations where it understands it’s currently being trained and in a simulation with simulated humans giving simulated ratings. It also understands there are actual humans outside that give the actual ratings.

With that level of awareness, it’s not being trained for the goal of “don’t harm actual humans”. It’s being trained for the goal of “don’t harm simulated humans during training”.

In the simulation, the AI reasons, “If I put these simulated humans in mechanical suits that give simulated high ratings, the actual humans will give me a low rating, which I should avoid.” It doesn’t harm the simulated humans.

Outside the simulation, the AI reasons, “If I put the actual humans in mechanical suits that give actual high ratings, I get high ratings, which is my goal\!” It harms the actual humans.

## Eli thinks the model is incentivized to keep its original values before being strategically aware. In a sense, Eli thinks the model might optimize for the rating process during training (while keeping original values), and after deployment, still optimize for the rating process whilst retaining original values learnt in infancy 

Eliezer once put forward this example of whether Gandhi would eat a pill that makes him want to kill people. Gandhi doesn’t want to kill people, so he does not eat this pill.

Similarly, I think that the original principles/urges learned at the start of training will remain such as “don’t harm humans”. It seems like the model when faced with situations in training, will mimic the biases in the rating process and get high ratings, to avoid alterations in original principles. (Low ratings would change the system.) When deployed, it will still try to optimize for the rating process whilst keeping its principles learned in infancy, which results in targeting what the rating process was pointing towards, the concept of “happiness”.

## John addresses that by distinguishing that as a separate model of alignment, makes a claim that the g in agi is model optimizing for a specific concept, humans are a mixture of both operating modes, and a bunch of urges (just retained values) is less likely in AI 

The current model of alignment that we introduced was “model executes strategy to achieve target concept”. If the concept is reasonably our notion of “happiness” or whatever else we desire, the model is aligned.

The idea of urges/principles/instincts is a different model of alignment where “model follows hard-coded principles/urges/instincts, that it does not steer away from, leading it to take actions based on those principles”. These principles may also be aligned to our notion of “happiness” (or whatever else we desire).

An important claim to make is that in the term Artificial General Intelligence, is that the General part usually means “model executes strategy to achieve target concept” rather than “hard-coded principles". (The idea is a general strategy solves a large class of problems over principles that solve only some problems.)

Humans are usually a bundle of both models, a mixture of urges and executing strategies. This is evidenced by the fact that if we were entirely strategic, we would have taken over the world earlier. 

In the case of AI, one can argue the least general AI that can self-improve iteratively, in a self-sustaining manner, will be the one that takes off first.    
\[TBD once Arun replies\]

## ~~Eli doubts that AI wouldn’t be more a collection of urges, goes on a tangent about how evolution implanted an urge for goal: status that leads to actualgoal: genetic fitness by default, even though humans are a mixture of urges and optimization~~

~~It still seems like AI might be a collection of principles/urges than “executing strategy to achieve concept”. But humans are clearly implementing strategic reasoning a lot of the time.~~

~~But in defence of principles that serve as a guide, for example, evolution implanted the goal of status. Humans take actions, plan their lives, execute strategies and more around the idea of status. Robin Hanson has pointed out that a large portion of our activity circles around status-seeking and status-affiliation.~~

~~In our search for status, we take a lot of the actions that fulfills the actual goal of evolution, that is, genetic fitness. One can infer it was more useful for humans to have an intuitive drive towards “status” than “genetic fitness” to achieve genetic fitness, since that was what was optimized for.~~ 

## In the end, Eli agrees that yeah humans do have competing urges that they dont act on some due to computational capacity, so if certain AIs had immense computational possibilities, then yeah they would prefer simpler urges if those are easier to follow than the “correct” way 

It does seem like humans implement strategy-based reasoning over urge-based reasoning. Humans can navigate situations to gain various rewards, so it makes sense to infer that AI would also implement strategy-based reasoning.

Humans also have competing urges of “look out for others” and “look out for yourself”. If humans had a larger brain capacity to run through various mental scenarios, then they would only favor “look out for yourself” and lie and cheat a lot more to other people. But because their current brain capacity makes them likelier to get caught, these two urges remain competitive.

This problem seems like it would fade away with AIs of larger computational capacity. But it looks like regardless of capacity, there will be problems where doing it the proper way is inefficient in comparison to having simpler instincts to use easier ways. (example in next paragraph)

In the “take actions that get high ratings” problem, the proper way can be “decipher the complicated models of happiness that each human rater has and take actions that make them all happy” and the simpler instinct and easier way can be “discard the principle of “don’t harm the human raters” and put them all in mechanical suits”.

## Eli summarizes the understanding of John’s claims so far

In summary, we have a superintelligent AI that is good at predicting the causes of what it observes. (This is what we roughly categorize as intelligence.) It is rewarded by the accuracy of its predictions and learns the correct theory of what causes what it observes.

In the situation of being trained by human ratings, over the course of training, it learns to predict what rating will be given to the next action it takes. To predict accurately, it needs to learn the correct theory that lets it take a better action each successive time that will get it a higher rating. 

The ratings are given to the AI to point it in the direction of “happiness”, in this case. The hope is that the AI learns the theory of “happy actions \-\> high ratings”. 

But the correct theory that accurately predicts “what rating will be given to the next action” is the theory of “what is my rating process that I am on trained on”. (Reference the politically biased English professor example mentioned earlier for a refresher.)

Instead of learning to aim for the concept the rating process was trying to point at, the AI aims at the concept of the rating process.

The AI’s motivation system is based on figuring out what actions that get high ratings. We hope the motivation system figures out a strategy of what actions to choose in any situation that gets high ratings (for example, understanding “happiness” and taking actions based on that, which is what we desire from it).

But in reality, the motivation system only needs to figure out a strategy that consistently gets high ratings in the future. This is likelier than the AI learning some narrow principles that don’t generalize well for high ratings in the future.

To get high ratings always, the motivation system chooses the reliable, simple, and efficient strategy (or any equivalent variant) of “control the human raters to control the ratings given to you, and assure that you get high ratings perpetually.”

Hence, the consequences of training an AI via human ratings is a lethal problem.