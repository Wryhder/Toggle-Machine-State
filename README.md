# Toggle Machine State

This is a simple little project that just aims to change the text content of a button (but it's been getting progressively sillier).

-----

### A little background

I am [working on a clone](https://github.com/Wryhder/Simone) of the [Simon](https://en.wikipedia.org/wiki/Simon_(game)) memory game. I'm using Vue, and have been trying to understand both its reactivity system and events in general. This project started as a solution to the first skill test assessment of [MDN's Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) article.

### ...Some more background

I am often tempted to do things like `let buttonText = btn.textContent`, and then I attempt to modify `btn.textContent` by doing `buttonText = "new button text"`, but then can't quite figure out why my changes won't show up.
...It won't show up because the variable (`buttonText`) merely stores the state of the Text node as at the time the assignment statement was executed and cannot be used to reference it afterward. To get the current value at any point in time, a function seemed a better idea than repeating `btn.textContent` all over the place. Hence, `toggleButtonText()`. Plus, the code just becomes more semantic.

__PS:__ I was going to use `innerText` before I read [this](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/). Check it out if you wonder how `innerText` differs from `textContent`.
