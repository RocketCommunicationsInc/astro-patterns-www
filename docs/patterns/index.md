<script setup>
import data from '../data.json'

// sort articles
const articles = data.sort(
  (a, b) => new Date(b.Updated) - new Date(a.Updated)
)

const transformDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>

# Patterns

A pattern is a **solution** to a **problem** in **context.**  What sets patterns apart is their ability to explain the **rationale** for using the **solution** (the "why") in addition describing the solution (the "how").

## Pattern Template

### Name:
A name by which this problem/solution pairing can be referenced.

### Problem: 
The specific problem that needs to be solved.

### Solution:
The proposed solution to the problem.

### Context:
When and where to apply a pattern. The circumstances in which the problem is being solved imposes constraints on the solution. The context is often described via a "situation" rather than stated explicitly. It helps to identify when a particular pattern might be applicable.

### Forces:
The constraints, challenges, conflicting requirements, or trade offs that must be considered in choosing a solution to a problem. They explain why the problem is non-trivial and why the solution is not straightforward. 

### Indications (Optional): 
The symptoms that might indicate that the problem exists.

### Resulting Context (Optional): 
The context that we find ourselves in after the pattern has been applied. It can include one or more new problems to solve. This sets us up for applying more patterns, possibly the next pattern(s) in a language.

### Related Patterns (Optional):
Other patterns that may be of interest to the reader. The kinds of patterns include:

Other solutions to the same problem,

More general or (possibly domain) specific variations of the pattern,

Patterns that solve some of the problems in the resulting context (set up by this pattern)

### Examples (Optional): 
Concrete examples that illustrate the application of the pattern.

### Code Samples (Optional): 
Sample code showing how to implement the pattern.

### Rationale (Optional):
An explanation of why this solution is most appropriate for the stated problem within this context.

## Examples

<ul class="grid grid-cols-1 gap-4">
  <li class="list-none border border-gray-100 p-4 rounded" v-for="article in articles">
    <a :href="article.name" class="capitalize text-2xl no-underline">
    {{article.name.replace('-', ' ')}}
    </a>
  </li>
</ul>
