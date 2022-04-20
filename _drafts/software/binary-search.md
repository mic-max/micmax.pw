---
layout: post
title: Binary Search in C#
---

Motivation: work

[.NET Benchmark Guide](https://benchmarkdotnet.org/articles/guides/getting-started.html)

distribution of data, even distribution no further improvements can be made.
normal distribution, we can improve the search since we know the middle buckets will be more likely than the outside ones.

linear will be faster than binary up to a certain point
use a benchmark to find at what point that is.

only using double and long values.

qualifications: c+ in statistics course

blog about using benchmarkdotnet
<https://hyr.mn/Fun-with-BenchmarkDotNet>

post the benchmark gist and share the command to run benchmarkdotnet with a gist url!
<https://benchmarkdotnet.org/articles/guides/how-to-run.html#url>

its hard to benchmark the linear vs binary search accurately without knowing how the distribution of the values being searched for will be.
for instance if I keep looking for -100 in a list that starts at 0, then linear search will always return almost immediately with zero. while binary search will still have to do roughly O(log2(n)) comparisons.
the same goes in the opposite direction, looking for 1000 in a list that ends at 100, linear search will completely exhaust the list, performing O(n) comparisons while binary will be pretty much the same regardless of position.
so is assuming the distribution is pretty even across all the array indices a good option here? thus making our benchmark be looking for the middle element in a linear search, and maybe the middle element off-by-one for binary search so that it still has to do log2(n) comparisons (if its directly the middle element then it will return almost immediately which would be the binary search best case scenario which wouldn't be fair)

doing the comparison with doubles also introduces the inexactness. for instance I cannot do a subtraction from a double and then compare it to an element in the list since it be slightly off.
e.g. 3.0 - 2.0 = 1.000000000001. say 1.0 was one of the elements in the list, the search might return the incorrect index?

so in the library I contribute to for work, there is a histogram. it has default bucket boundaries of: 0, 5, 10, 25, 50, 75, 100, 250, 500, 1000
(-Inf, 0] is one bucket,
(0, 5] is the next
...
(1000, +Inf) is the last

Should I take into consideration that the odds someone is using the default buckets is going to be way more likely and optimize for that? aka. array of size 10, that will result in a right skew if random values were generated with equal likelihood?

or since it is customizable I should also allow the end-user to customize their performance? be also providing an estimated distribution of these buckets? is anyone asking for that?

<https://twitter.com/micmax_/status/1470468493413732353>
> am I really thinking about reusing a binary sort function I wrote 6 years ago..

https://docs.google.com/document/d/1Met4Oz8ERXR9I7bucS_I-uhc_5eJccf0vY5syYmybQE/edit#heading=h.hnbx87p7s4gs
