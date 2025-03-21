# CS 260 Notes

### Git Notes
__Helpful Command Line Prompts:__   
-> `git clone [URL]`  
Clones a repository from Github
-> `git fetch`  
Retrieves changes and updates from GitHub  
-> `git status`  
Provides a list of modified files not yet committed  
-> `git add`  
Adds file(s) for staging and committing  
-> `git commit -m "helpful message"`  
Commits the file with descriptive message of the committed changes    
-> `git log`  
Useful for seeing progress and history  
-> `git checkout "id"`  
Useful for visiting different versions  
NOTE: The Branch is defaulted to "Main"  
-> `git diff HEAD HEAD~1`  
Useful for comparisons  
NOTE: `~#` is the distance from `HEAD`  
-> `git config --global user."name/email" "___"`  
Declares who is commiting to the code  
-> `git reset --hard <previous_commit>`  
Useful for resetting to a commit as a form of undo. I.e. Undoing a merge  
->  `git merge <feature_branch>`  
Merges two branches together  
EXAMPLE: `git checkout main` -> `git merge html_branch`  

### Markdown Notes  
-> `#`, `##`,`###`  
Headers  
-> `*`/`_`, `**`/`__`,`~~`,`***`,`**`+`_`  
Each alter text as *italics*, **bold**, ~~strikethrough~~, and more  
-> `<sub>`/`</sub>`,`<sup>`/`</sup>`,`<ins>`/`</ins>`  
Each alter text as <sub>subscripts</sub>, <sup>superscripts</sup>, and <ins>underlines</ins>  
-> `[display text](link)`  
Provides a [hyperlink](https://www.youtube.com/watch?v=dQw4w9WgXcQ)  

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

**Server IP** :: `54.156.31.145`  
**Domain** :: `http//minijosh.click` / `https://minijosh.click/`
- `http//[subdomain|.minijosh.click` also works  

`[subdomain].[secondary].[top]`  

**Caddy**  
-> `./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon`  
Deploys files to production

### Console Commands  
-> `cd`  
Change Directory. `cd ..` moves back a directory. `TAB` reveals potential directories  
-> `mkdir` / `rmdir`  
Make / Remove directory  
-> `rm` / `mv` / `cp`  
Remove, Move, and Copy files  
-> `ls`  
List files within a directory  
-> `find`  
Find file(s)  
-> `cat`  
Output contents of a file  
-> `kill` / `CTRL-C`
Kill the current running program  
-> `sudo`  
Execute a command as an admin  
-> `ssh`  
Create a secure shell on a remote device  
-> `scp`  
Securely copy files to a remote computer  
-> `history` / `CTRL-R`
Show the history of recently used commands  
-> `ping`  
Check if a website is up and running  
-> `dig`  
Show the DNS information for the domain you searched  
-> `man`  
Look up the commands in the manual  

**Server Commands**  
Connect :: `ssh -i [key] ubuntu@[server-ip]`  
Privatize Key :: `chmod  600 [key pair file]`  
Find IP :: `dig [domain]`  
Who Owns :: `whois [domain]`  
Server Directory :: `ls -l`  
Disconnect :: `exit`  

**Caddy Commands**  
Caddy Configuration :: `vi Caddyfile`  
Save Caddy File :: `:wq`  
Super Caddy Restart :: `sudo service caddy restart`  

*Other Server Notes*  
Server Version - `t2.micro`    
- If current package is slow/low memory, use `t3.nano`  
- Access server [here](https://aws.amazon.com/)
Elastic IP - Free while running server. Costs while server is deactivated.  
Security Package - ssh, HTTP, HTTPS  
Alerts - Zero-Budget  

## HTML Notes

- HTML is text-like and works with `elements` and `tags`. `Tags` include the use of `<`,`>`, and `/`.  
- Attributes are used to describe details and content within tags.  
Example :: `<p id="hello" class="greeting">HelloWorld</p>`  
- Hyperlinks use an anchor tag, `<a>`, with an `href` attribute. This embeds the link within text provided.  
Example :: `<a href="https://minijosh.click">Visit my site here</a>`  
- Comments work like normal forms of code, but the syntax are as follows:  
`<!-- This isn't read -->`  


### HTML Tags :: Divided into Groups  
`<html>` Opens the file and reads as HTML `</html>`  

`<body>` The content body of the page `</body>`  
`<header>` Header of the content body `</header>`  
`<main>` Main of the content body `</main>`  
`<footer>` Footer of the content body `</footer>`  

`<title>` Changes the title of the tab `</title>`  
`<head>` Provides header information `</head>`  
`<div>` Block division of content `</div>`  
`<nav>` Navigational inputs `</nav>`  
`<span>` Inline span of content `</span>`  

`<p>` Paragraph of text `</p>`  
`<b>` Bring attention `</b>`  
`<h#>` # is 1-9, provides a text heading `</h#>`  

`<table>` Starts the creation of a table `</table>`  
`<tr>` Table Row `</tr>`  
`<th>` Header for the table `</th>` 
`<td>` Data for the table `</td>`  

`<ol>` / `<ul>` Ordered / Unordered list `</ol>` / `</ul>`  
`<li>` Creates a list `</li>`  

`<a>` An anchor for a hyperlink `</a>` 
 - Uses `href=""` to access the hyperlink.  
`<img>` Image reference `</img>`
 - Uses `src=""` to access the image address.
 - Uses `alt=""` to display alternate text when the image fails to load. Also describes the image.
 - Use `width=""` or `height=""` to change the size of the image.  
`<audio>` Audio content `</audio>`  
`<video>` Video content `</video>`

## HTML Inputs  
`<form>` Input container and submission `</form>`  
Example :: `<form action"form.html" method="post">`  
`<fieldset>` Labeled input grouping `</fieldset>`  
Example :: `<fieldset> ... </fieldset>`  
`<input>` Multiple types of user inputs `</input>`  
Example :: `<input type="" />`  
`<select>` Selection Dropdown Menu `</select>`  
Example :: `<select><option>1</option></select>`  
`<optgroup>` Grouped selection dropdown `</optgroup>`  
Example :: `<optgroup><option>1</option></optgroup>`  
`<option>` Selected options `</option>`  
Example :: `<option selected>option2</option>`  
`<textarea>` Multiline text inputs `</textarea>`  
`<label>` Individual input label `</label>`  
Example :: `<label for="range">Range: </label>`  
`<output>` Output of the input `</output>`  
Example :: `<output for="range">0</output>`  
`<meter>` Display the values with a known range `</meter>`  
Example :: `<meter min="0" max="100" value="50"></meter>`  

### Input Types  
 - Text, single line textual value
 - Password, obscured
 - Email, address
 - Tel, phone number
 - Url, site address
 - Number, numerical value
 - Checkbox, inclusive selection
 - Radio, exclusive selection
 - Range, range limited number
 - Date, year, month, day
   - Datetime-local, day and time
   - Month, year and month
   - Week, week of the year
 - Color
 - File, local files
 - Submit, a button to trigger the submission

Example of implications :: `<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />`  

*Common Attributes Among Input Types*  
 - Name :: Name of the input, also used as the name when submitted
 - Disabled :: Disables ability for the users to interact
 - Value :: The initialized value
 - Required :: Signifies that a vlalue is required to be valid  

*External Media Elements*  
Media tags take in URLs as attributes. The URL can be in link or relative format.  
 - Image `<img>` :: Needs `src` attribute.  
 - Audio `<audio>` :: Specify `src`, but include `controls` if I want the user to control the audio. `Autoplay` starts the music once it loads, and `loop` continues the audio file.
 - Video `<video>` :: Specify `src`, but can also include the `controls` and `autoplay` features. TIP -> `crossorigin="anonymous"` could be helpful when requesting files/videos from other domains.  

*Internal Media Elements*  
These are used to create within the HTML itself.  
 - SVG / Scalable Vector Graphics `<svg>` :: A way to redner graphics within HTML. Is capable of drawing and visualizations, especially when paired with JavaScript and CSS. Uses attributes such as: `viewBox` and `stroke` with sub tags like `<circle>`.  
 - Canvas `<canvas>` :: 2D drawing on the HTML page. Includes attributes such as: `id`, `width`, `height`, `style`, and more!  

## CSS Notes  

- Used to organize, style, and interact with HTML
- Made up of rules and rulesets, example below:  

 -> `p { color: green; }`    

|Example Token| Represents     | Meaning                                                  |
|-------------|----------------|----------------------------------------------------------|
| `p`         | Selectors      | Selects the type of elements being affected              |
| `{ "text" }`| Rule / Ruleset | The contents of the brackets hold the rules and changes  |
| `color`     | Property       | This is the type of property that is being changed       |
| `:`         | Declaration    | Actively declares what is/isn't being changed            |
| `green`     | Value          | Sets the condition/value of the effected property        |    

- For cascading styles, the lowest (closest) level will override higher (farther) rules. Best seen in `inspect`  

**Box Model**  
*From innermost to outermost:*  
- Element's Content: Text and image elements are displayed here  
- Padding: Inherits background colors  
- Border: Holds properties such as color, line style, and thickness  
- Margin: Represents whitespace  

 It's noted that the width and height of an element is defined by the content box. This can be changed by the `box-sizing` property from the default value of `content-box` and `border-box`. Also includes the padding and the border.  

 ### Selectors  
These use the names of the HTML elements to find what they alter. Examples include `body`, `h1`, `p`, and more. `*`, the wildcard element can be used to select everything in an HTML file.  

**Combinators**  
`body section` - Decendent - Any section that's decendent of a body  
`section > p` - Child - Any p that's a direct child of section  
`div ~ p` - General Sibling - Any p that has a div sibling  
`div + p` - Adjacent Sibling - Any p that has an adjacent div sibling  

**Class Selectors**  
Based on classes within an element since they can have 0 or more.  
`.[class]` or `[element].[class]`  

**ID Selector**  
This is similar to the Class Selectors, but the ID tags are meant to be unqiue within HTML.  
`#[IDtag]`  

**Attribute Selector**  
Select an element based on attributes. They can be used for attributes such as `a[href]`.  
`p[class='summary']`, `a[href="./fish.png"]`, and the wildcards `p[href*="https://"]` all work.  

**Psuedo Selector**  
These are selectors based on realtionships such as positional, mouse interactions, and attributes.  
`[element]:[relationship]` | Example: `section:hover` means the rule applies when the mouse hovers over the box.  
More specific Psuedo Selectors can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)  

**Declarations**  
Specifies a property and a value to assign rules to.

*Common Declarations*  
:: `Property`, Value, Additional notes (example)
- `background-color` - color - Fills background (red)
- `border` - color width style - Sets border where any or all values may be (#fad solid medium)  
- `border-radius` - unit - Size of border radius (50%)  
- `box-shadow` - x,y, offset radius color - Creates a shadow (2px 2px 2px gray)  
- `columns` - number - Number of text columns (3)  
- `column-rule` - colod width style - Sets the border between columns (solid thin black)  
- `color` - color - Sets text color (rgb(128, 0, 0))  
- `cursor` - type - Sets the cursor display when over element (grab)  
- `display` - type - Defines how to display element with its children (none)  
- `filter` - filter-function - Applies visual filter (grayscale(30%))  
- `float` - direction - Places element left/right in flow (right)  
- `flex` - - Used in responsive designs  
- `font` - family size style - Defines text font using shorthand (Arial 1.2em bold)  
- `grid` - - Grid layout. Responsive design  
- `height` - unit - Sets the height of the box (.25em)  
- `margin` - unit - Sets the margin spacing (5px 5px 0 0)
- `max/min-[width/height]` - unit - Restricts the width/height to no more/less than the unit (10vh)
- `opacity` - number - Sets how opaque the element is (.9)
- `overflow` - [visible/hidden/scroll/auto] - Defines what happens when content doesn't fit the box
- `position` - [static/relative/absolue/sticky] - Defines how the element is psositioned in the document
- `padding` - unit - Sets spacing for padding box (1em 2em)
- `left` - unit - Horizontal value of positioned element (10rem)
- `text-align` - [start/end/center/justify] - Defines how text is aligned with element
- `top` - unit - Vertical value of positioned element (50px)  
- `transform` - transform-function - Applies transformaiton to element (rotate(0.5turn)
- `width` - unit - Sets width of the box (25vmin)
- `z-index` - number - Controls positioning of element on z axis (100)

*Units*  
`px`   : Num of pixels  
`pt`   : Num of points (1/72 of an inch)  
`in`   : Num of inches  
`cm`   : Num of centimeters  
`%`    : Percentage of the parent element  
`em`   : Multiplier of width of the letter `m` in parent's font  
`rem`  : Multiplier of width of the letter `m` in the root's font  
`ex`   : Multiplier of the height of element's font  
`vw`   : Percentage of the viewport's width  
`vh`   : Percentage of the viewport's height  
`vmin` : Percentage of the viewpart's smaller dimension  
`vmax` : Percentage of the viewport's larger dimension  

*Color*
`Keyword` - Set of predefined colors (red, white, cornflowerblue, darkslateblue, etc)  
`RGB hex` - Red, green, and blue hexadecimal number w/optional alpha opacity (#00FFAA22 or #0FA2)  
`RGB function` - Red, green, and blue as a percentage or numb (0-255) w/optional alpha opacity (rgb(128, 255, 128, 0.5))  
`HSL` - Hue, saturation, and light, w/optional opacity. Hue is position on the 365 degree wheel. Saturation is how gray the color is. Light is how bright the color is. (hsl(180, 30%, 90%, 0.5))  

*Fonts*  
`@font-face { font-family: src: url() }` or `@import url("font-link")`  
These host/download the font type to be used with the font-family application.  

*Animation*  
Uses `animation-name` property to name the keyframes, `animation-duration` also declares the time for the full animation.  
 -> `@keyframes [name] {}` starts/declares the animation. Within, use `from`, percentages, and `to` for keyframes and their conditions.  

**Response and Display**  
This is meant to help give the webpage formatting that is clear and responsive to different screen sizes.  
| Display Value | What it does...                                    |  
|---------------|----------------------------------------------------|
| `none`        | Doesn't display element. Exists, but not rendered  |  
| `block`       | Displays with widths that fills parent element     |  
| `inline`      | Displays with widths only as big as content        |  
| `flex`        | Displays element's children in flexible orientation|  
| `grid`        | Displays element's children in grid orientation    |  

*Float*  
Elements left or right of its container element allows infline elements to wrap around.  
Ex: `float: right;`  

*Media*  
Detects what direction the screen is orientated.  
Ex: `@media (orientation: portrait) { [rule] }`  
 - Can end up using as a way to rotate or even remove elements

*Grid and Flexbox*  
Automatically respond to screen sizes.  
`display: grid;`  
 - `grid-template-columns: ;` - specifies layout
 - `grid-auto-rows: ;` - fix the heights
 - `grid-gap` - gaps in between the elements

# JavaScript  
*Still good form to use `;` and `{}`*  
*Access `Console` in `f12`*  

**Node.js**

*Console Commands*
`console.log()` - Main function / output syntax  
`node` - opens JavaScript  
`node -e ...` - uses JavaScript without opening compiler  

*Installing Packages*
`npm init` - Initializing package installation  
`npm install "package name"` - Install the package  

*Debugging*  
`f5` starts the debugging process using Node  
`f10` goes to the next line  
`f11` steps into functions  
`SHIFT-f5` kills the debugger  
`node --watch [file]` watches for changes and automatically refreshes the file  

*Implementing JS*  
1. -> Use the `<script>` element within HTML  
2. -> Use the `<src>` element to reference a file
3. -> Include as event attribute handler  

`npx vite` -> Runs the files and pulls up a browser/window  
`<script> + src=` -> Implements the jsx file  

*Components*  
Example Component:  
JSX -> `<div> Component: <Demo /> </div>`  
React Component -> `function Demo() { const who = 'world'; return <b>Hello {who}</b>; }`  
Result HTML -> `<div>Component: <b>Hello world</b></div>`  

When importing `./[css file]`, address `class` (CSS) as `className` (JS) in order to stylize elements.  

*Properties* - React components can pass information through as element properties to be used when displayed.

Ex: JSX -> `<div>Componenet: <Demo who="Walke" /><div>`  
    React -> `function Demo(props) { return <b>Hello {props.who}</b>; }`  

*State* - Components can hold internal states. The function returns a variable with current state. Uses `React.useState`  

Ex: `const [clicked, updateClicked] = React.useState(false);`  

*Render* - Controls how the components react to users and development. Uses `render` / `root.render`  

*Router* - Aids in navigation and when elements are used  
`<Route path="" element={<name/>} />` - Nestled between `<Routes/>` and detects when elements can and whould be loaded.  
`<Link>` or `</Link}` - Uses `to=""` for the URL instaed of href.  

**Advanced Route Definitions**  
*Dynamic Routing* - `:id` - When using a colon, it'll match any URL  
Example -> `/books/:id` matches `/books/1`, `/books/name`, etc.  
 - When using *Dynamic Routing*, the ID can be grabbed using `useParams`

*Routing Priority*  
The routing will attempt to match the ID with the best option.  
`*` is used to catch everything. Great for 404 pages.  
Example -> `... path="*" element={<NotFound />} ...`  

*Nested Routes*  
If an element is paired with a parent route, it'll render to all of the child Route.  
 - In example, when matched, an `Outlet` component is a placeholder for the current page's content.
If a parent route contains an element, but no path, it'll render similar routes. This is especially useful if they don't have a similar path.

When using `OutletContext`, it can collect shared data.  

*Multiple Routes*  
One of two ways are common:  
 - Separate Routes  
Two sets of routes can define different segments of the site, but will render both if they match.
Can use `<aside>` as a way to separate. `location` can also be used to hardcode the route.  
- Nested Routes
Moves all like routes together into one component.
Should use `*` at the end of the nested routes or it won't match the child routes.

`useRoutes` Hook  
The hook passes route components as keys and values of objects.  

**Handling Navigation**  
*Link Navigation*  
Simplest form of navigation.  
`<link to="/">Home</Link>` or `<Link to="/books">Books</Link>`  
`/` - Absolute Route
`../` - Relative link, goes up one level :: `/books/3` to `/books`  
`text` - Adds to current link :: `to="edit"` -> `/books/3/edit`  

`to` - A prop that is important in pointing to a link  
`replace` - Bool. When set to True, it'll replace browser history with the new link  
`reloadDocument` - Bool. When set to True, it'll act like an anchor tag and complete a full page refresh  
`state` - Passes data along with the link that doesn't show up in URL  

`NavLink` - Same as `Link` but it can show if the link is active
 - `isActive` can be used as a parameter

`Navigate` or `useNavigation` hook  
`<Navigate to="/" />` or `const navigate = useNavigate()`  
Can also use `navigate(#)` in which the number is direction into page history (+/-)  

`?` - Mark of search parameters. Anything after this is a search parameter  
`useSearchParams` - Gathers search parameters  

`useLocation` - Parses values from location URL  
`const location = useLocation()`  

`BrowserRouter` - Contains and controls the routing action  

**JavaScript `console.`**  
`log` - Can output, formatt, and stylize etc.  
Examples: `console.log("hello");` / `console.log("hello %s", "world");` / `console.log("%c Demo", "font-size:1.5em; color:green;");`  

`time` - Can be wrapped around other points of code in order to be timed.  
Examples: `console.time('test_time'); n/ for (let i = 0; i < 1500; i++) {} n/ console.timeEnd('test_time');`  

`count` - Interates based on how many times a program / function is called.  
Examples: `console.count('a');`  

**JavaScript types and construct**  
Declaring Variables : When declaring variables, `const` is used to prevent the variable from being changed in the future. It'll throw an error if attempted. Use `let` to declare a changable variable.  

*Common operators* are the same as usual: `+, - , * , /` but `===` represent strict equality (recommended).  
JavaScript also allows performs *type conversions* when using operators. Examples include converstions between ints, strings, bool, etc. Also works with the equality operator.  
- `2 + '3'; OUTPUT: '23'`  
- `2 * '3'; OUTPUT: 6`  
- `true + null; OUTPUT: 1`  

*Conditionals* follow the `if {}`, `else if {}`, and `else {}` patterns as well as the normal `&&, ||, and !` bool operators. The ternary `(?)` operator is also available. Example: `a === 1 ? console.log(1) : console.log('not 1');`  

*Loops*  
`for` - `for (let i = 0; i < 2; i++) { console.log(i); }`  
`do while` - `do { console.log(i); i++; } while (i < 2);`  
`while` - `while (i < 2) { console.log(i); i++; };`  
`for in` iterates over an object's property names  
- `const arr = ['a', 'b']; for (const name in arr) { console.log(name); }`  
`for of` interates over an interable's property values  
- `const arr = ['a', 'b']; for (const name in arr) { console.log(name); }`  
`switch` was mentioned, but not elaborated. This is what I found:  
Allows for the use of `default` and `cases`.  
`switch (i) { case 0: console.log("i is 0"); case 1: etc... default: etc... }`  

The loops also allow for `break` and `continue` which allows the program to leave the loop or advance.  

*Strings*  
The variables for strings can be defined by `'`, `"`, and `` ` ``. The quotes act the same. The backtick allows for "string literals" which need `${}` as a specifier. Example: "console.log(`string ${l + (1 + 1)} text`);"  

Strings also have *functions* connected to the variable.  
- `length` - Num of char in string
- `indexOf()` - Start index of a substring - string.indexOf('string')
- `split()` - Split the string into an array at the substring = string.split(':')
- `startsWith()` - Returns true if string starts with substring
- `endsWith()` - Returns true if string ends with substring
- `toLowerCase()` - Converts all chars to lowercase

*Functions*  
They have a similar creation, call, passing, and returning of variables. One of the larger differences is the lack of type declarations.  
`funciton hello(who) { return 'hello ' + who; }   console.log(hello('world));`  

Functions can have zero+ parameters and return variables. Any function without a return value is usually to there to produce a side effect instead of creating a new variable. When using parameters, you can declare a variable like, `title = 'title'`, or leave as normal. If a passed variable doesn't match a parameter, the parameter becomes `undefined`.  

*Anonymous functions* somewhat act like class objects, but not exactly. These are functions that are assigned to variables and can be called.  
Example:  
`function doMath(operation, a, b) { return operation(a,b); }`  
`const add = funciton (a, b) { return a + b; };`  
`console.log(doMath(add, 5, 3)); OUTPUT: 8`  
Anonymous functions can also be written in the moment with abbreviated arrow syntax  
`console.log(doMath((a, b) => a - b, 5 3)); OUTPUT: 2`  

More examples of JavaScript functions can be found [here](https://github.com/webprogramming260/.github/blob/main/profile/javascript/functions/functions.md#creating-passing-and-returning-functions)  

*Inner Functions* can help modularize code without exposing it all directly.  
Example:  
`function labeler(value) { function stringLabeler(value) {} function numberLabeler(value) {} // if (typeof value == 'string') { sLab(); } else if (typeof value == 'number') { nLab(); }`  

*Arrow Function*  
It provides more compact feel to functions by allowing parameters and a return value.  
`() => 3;`  
`a.sort(function (v1, v2) { return v1 - v2; });` or `a.sort((v1, v2) => v1 - v2);`  
Return has special rules for return. Return is optional without `{}` if it contains a signle expression. If there are `{}`, it'll need return like a normal funciton.  
*Closure*  
I'll need to look into this a little bit more, but it involves the function and values with a pointer applied. To my understanding, the function can be saved and called by a variable multiple times and update accordingly. Example includes an increment function assigned to a closure function. `console.log(closure());` is called twice and the ouput becomes `1` and then `2`.  

These arrow functions can also be used with React to make the code much simpler and fit into JSX files. Example: `<button onClick={() => setCount((prevCount) => prevCount + 1}>n++</button>`  

To prevent it from being too clunky, think about different ways to save and implement variables and functions. Example:  
`function countVarFact(var) { return () => setCount((prevCount) => var(prevCount));`  
`const tenXVar = countVarFact((c) => c * 10);`  
`<button onClick={tenXVar}>n*10</button>`  

*Array Functions*  
`push` - Add item to *end* of the array  
`pop` - Remove item from *end* of array  
`slice` - Return sub-array - `a.slice(1, -1)`  
`sort` - Run function to sort array in place - `a.sort((a,b) => b-a)`  
`values` - Creates iterator to use with for of loops - `for (i of a.values()) {}`  
`find` - Finds first item that matches test - `a.find(i => i < 2`  
`forEach` - Run function on each array item - `a.forEach(console.log)`  
`reduce` - Run function to reduce array items to single item - `a.reduce((a,c) => a + c)`  
`map` - Run function to map array to new array - `a.map(i => i+i)`  
`filter` - Run function to remove items - `a.filter(i => i%2)`  
`every` - Run function to test if *all* items match - `a.every(i => i < 3)`  
`some` - Run function to test if *any* items match - `a.some(i => i < 1)`  

Examples: `const a = [1, 2, 3];`  
`console.log(a.map((i) => i + i)); OUTPUT: [2,4,6]`  
`console.log(a.reduce((v1,v2) => v1 + v2)); OUTPUT: 6`  
`console.log(a.sort((v1, v2) => v2 - v1));`  

*Obects and Classes*  
Objects act similarly to dictionaries among other languages.  
`const obj = new Object({ a: 3});`  
Once declared, you can add and modify the object freely.  
`obj['b'] = 'fish';` or `obj.c = [1, 2, 3];` or `obj.hello = function () {};`  
When calling the object, it can use `[]` or `.` to call the variables. `console.log(obj);` will print out the name and the value.  
The objects can also be declared in a literal sense with multiple keys and values separated by a comma.  

*Object Functions*  
You can also use functions to output specific aspects of objects:  
- `Object.entries(obj)` - entries - Returns array of key + val pairs
- `Object.keys(obj)` - keys - Returns array of keys
- `Object.values(obj)` - values - Returns array of values

*Constructor*  
This is similar to when a Class is initializing it's values.  
`function Person(name) { return { name: name, }; }`  
`const p = new Person('Josh');` -> `console.log(p);` -> Outputs: `{name: 'Josh'}`  
These constructors can also have multiple types of property values such as functions:  
`log: funtion () { console.log('My name is ' + this.name); },`  
`p.log();` -> Outputs: `My name is Josh`  

The `this` pointer, if in the context of the Object, always points to the Object.  

*Classes*  
Classes can be used to define objects. Inteded to be reusable. The declarations for a class is similar to Objects but they have a set constructor and function declarations.
```js
class Person {
    constructor(name) {
        this.name = name;
    }

    log() {
        console.log('My name is ' + this.name);
    }
}`  
const p = new Person('Josh');
p.log();
```
 -> Output: `My name is Josh`  

Properties and functions are usually private if prefix.  
```js
class Person {
    #name;

    constructor(name) {
      this.#name = name;
    }
}
const p = new Person('Josh');
p.#name = 'Tried'
```
-> Output: `Private Field error`  

*Inheritance*  
Classes can inherit other properties from other classes using `extends`. Parameters needing to go the parent class are deliver via `super` functions. If there are any functions with the same name, the child's version take priority. Parent's version is accessed by `super`.  
```js
class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    print() {
        return super.print() + '. I am a ' + this.position;
    }
}
const e = new Employee('Josh', 'student');
console.log(e.print());
```
-> Output: `My name is Josh. I am a student`  

*JavaScript Object Notation (JSON)*  
Formating follows the same patterns as before. I.e. strungs, numbers, bools, arrays `[]`, object `{a:''}`, and null. These JSON files often contain obejects with keys as `strings` and the values are a valid JSON type. Delimiting these types include `{}` for objects, `[]` for arrays, `""` for strings.  
JSON Doc Example:  
```json
{
"class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
It's possible to convert between the two using `JSON.parse` and `JSON.stringify`.  
`JSON.stringify` -> `{"[key]":[value], ... }`  
`JSON.parse` -> `{[key]: [value], ... }`  
Example note: If JSON can't support a type, such as `undefined`, it'll be dropped upon conversion. 

*Local Storage* - `localStorage`  
This can be used to collect and store values across sessions and HTML pages. The `localStorage` has access to some functions to gather data to and from storage.  
- `setItem(name, value)` - Sets a named item's value in Local Storage
- `getItem(name)` - Gets a named item's value from Local Storage
- `removeItem(name)` - Removes a named item's value from Local Storage
- `clear()` - It basically wipes all of the items in Local Storage
When attempting to store values, they should be of `string`, `number`, or `bool` types. If attempting an `array` or `object`, they must be `JSON.strigify()`-ied when inserting in LS, and then `JSON.parse()`-ed when extracting.
Examples:
`localStorage.setItem('user', user);` -> inputs "let user = 'Josh';" into Local Storage  
`localStorage.setItem('object', JSON.stringify(myObject));` -> inputs objects/arrays into Local Storage. Needs `stringify`  

`console.log(localStorage.getItem('user'));` -> retrieves 'Josh' from Local Storage  
`console.log(JSON.parse(localStorage.getItem('object')));` -> retrieves objects/arrays from Local Storage. Needs `parse`  

*Promises*  
This helps to execture certain parts of code. Promise states can be categorized as `pending` (Running Async), `fulfilled` (Completed), and `rejected` (Failed to Complete). Asynchronous will run the promise and the code in parrallel time. Since a Promise can run, now it needs conditions to decide if the Promise has been fullfilled or rejected. When calling `resolve()`, it sets the Promise to `fulfilled`. When calling `reject()`, the Promise becomes `rejected`.  
Example: 
```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```
Promises can also use `then`, `catch`, and `finally`.   
`then` is called when the Promise is fulfilled!  
`catch` is called when the Promise is rejected!  
`finally` is always called when Promise is completed!  

*JavaScript Async and Await*  
`await` is used to block until the promise until the promise becomes fulfilled or rejected. Similar to the `then/catch` idea, but it changes to `try/catch`  
`try { const result = await coinToss(); console.log(""); } `  
`catch(err) { console.error(""); } `  
`finally { console.log("") } `  

`async` is used ad the beginnings of functions to transform it into a Promise and immediately resolves the return function. If the function doesn't immeadiatly resolve, the output will show pending.  
`await` wraps a call to the `async` function and blocks execution until the Promise is resolved.  
Example:  
```js
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse);
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```
The awaits allows for the processes to be blocked until they are completed and in order.  

*Deconstructing*  
This is when you pull items out of obejcts or remove structures. Can be done with arrays and objects. For the examples, use `const a = [1,2,4,5];`  
Destructing can happen by settings values from a structure into new variables. `const [b, c] = a;` -> `console.log(b, c);` -> Outputs: `1, 2`  
These values can also be combined by doing the following. `const [b, c, ...others] = a;` -> `console.log(b, c, others);` -> Outputs: `1, 2, [4,5]`  
Similar things can be done with objects. You can pull values, but you can also change their property name from their original.  
Example object -> `const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };`  
`const { a, c } = o;` -> Console.log(a, c); outputs: `1, ['fish', 'cats']`  
`const { a: count, b: type } = o;` -> Console.log(count, type); outputs: `1, 'animals'`  

*Debugging JavaScript Tips*  
- Use console debugger. You can also use `console.log` where outputs would be to make sure vars and vals are on track
- You can also go to the browser debugger and select `source` and place breakpoints. The code will pause upon refreshing

*Reactivity*  
Enables with three React pieces: props, state, and render...  
For `state` values, a table is kept for all components where React will request the current state or recent changes. Changes will happen asyncronously. Uses `updateState` / `useState`  
Example - A color attribute can send it's updated/selected color to another variable so they share the same data.

With `React.useState` and `setInterval`, you can make changes to values and check it within time.  

`useEffect` is helpful for running something each time the component runs. A hook will be grabbed each time unless there are specific dependencies. `[]` as a dependency means it's only called once. Hooks must be globally declared in order to be called!  

You can also decide when a clean up happens. Use `cleanup()`  



# Service  
Understanding the web of the Internet. Not everything is hardwired together. They communicate via IPs or/and domains. Use `dig` to find domain IPs. `traceroute` allows you to see all the hoops through various devices and IPs.  

There are also layers and purposes to connections such as Applications -> HTTPS, Transport -> TCP, Internet -> IP, and Link -> Hardwired.  

**WEB SERVERS**  
It's possible to make the applicaiton a web service. Through importing packages, it'll help load your content. It's also possible to make endpoints that will go through additional code and pathways!  

*Web Service Gateways*  
Web server is the physcial devicee while the web service is the application that provides functionality.  
A *Gateway* opens the way to other port numbers and services associated with the larger address/domain.  
*Microservices* are smaller and more managable services that aid a larger system. Can often be copied and run mutliple times in order to support a larger function. Ex. system holding 1k users multiplied to support 10k users.  
*Serverless* is evolved from the microservices. Through gateways, code and endpoints can be called to support the on demand needs.

HTML, CSS, JavaScript -> Frontend and HTTPS process  
`fetch` -> Requests from other services and APIs  
Fetch, Data Storage -> Backend  

*Uniform Resource Locator (URL)*  
Web Resources can be just about **anything**. Examples include: images, JSON objects, video, counters, and more!  
 == `<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>` ==  
 `Scheme` - Protocall to ask for resource  
 `Domain Name` - Name / Owner of the URL  
 `Port` - Specifies Numed Network to access Domain  
 `Path` - Direct to resource within the Domain  
 `Parameters` - Represents key value pairs  
 `Anchors` - Guides to sub-location  

Other names include: `Uniform Resource Name (URN)` - Unique resource, not really location - and `Uniform Resource Identifier (URI)` - A general resource identifier.  

*Ports*  
IP addresses and Port Numbers are needed when connecting to the Internet. Port numbers help support a device to access different **Protocols**. These protocols can sometimes be public and exposed or internally used. **IANA** defines standard port numbers.  
- Common Port Numbers -
- `20`  > (FTP) File Transfer Protocol / Data transfer
- `22`  > (SSH) Secure Shell / Connecting remote devices
- `25`  > (SMTP) Simple Mail Tranfer Protocol / Send mail
- `53`  > (DNS) Domain Name System / Looking up IP addresses
- `80`  > (HTTP) Hypertext Transfer Protocol / Web Requests
- `110` > (POP3) Post Office Protocol / Retrieve mail
- `123` > (NTP) Network Time Protocol / Manage time
- `161` > (SNMP) Simple Network Management Protocol / Manage Network Devices like routers or printers
- `194` > (IRC) Internet Relay Chat / For chatting
- `443` > (HTTPS) HTTP secure / Secure web requests

Caddy will read these protocols and redirects to the needed locations. **DON'T** overlap port numbers so that each can communicate differetly with Caddy and file locations. For example, `simon` is on port 3000 and `startup` is on port 4000. High range ports don't matter as long as they don't overlap.  

*HTTP*  
The method for communicating when on the web.  
Use `curl` to see some of this exchange of requests and responses.  

Reponses
```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```
General Syntax for an HTTP response is below.
```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
The Verb, Path, Parameters, Anchor, and Version are all included in the requests. The remaining lines are optional and paired off as key value pairs. The body is also optional and is removed from the headers by two /n's.  
General Syntax for an HTTP reques. The one main difference between is the first line variables.  
```yaml
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
*Verbs*  
`GET` - Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.  
`POST` - Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.  
`PUT` - Update a resource.  
`DELETE` - Delete a resource.  
`OPTIONS` - Get metadata on the source.  

*Status Codes*  
Codes are partitioned into five blocks. They're meant to help know how to interpret the response.  
1xx -> Informational | 2xx -> Success | 3xx -> Redirect to other location | 4xx -> Client errors | 5xx -> Server Errors  
100 -> Continue      | 200 -> Created | 307 -> Permanent redirect         | 403 -> Forbidden     | 503 -> Service Unavailable   

*Headers*  
Headers specify metadata about a request or response. Security, caching, data formats, cookies... etc...  
Authorization -> Token that authorized user making request  
Accept -> The format client accepts  
Content-Type -> Format of content sent  
Cookie -> Key value pairs are generated by server and stored on the client  
Host -> Domain name of the server, required in all requests  
Origin -> Identifies the origin cause the request  
Access-Control-Allow-Origin -> Server response of what origins can make a request  
Content-Length -> Number of bytes contained in the response  
Cache-Control -> Tells client how it can cache the response  
User-Agent -> Client application making the request  

*Body*  
Format of the body of HTTP request/response defined by `Content-Type` header. Maybe HTML, binary image format, JSON, JavaScript. May specify what formats it accepts using the `accept` header.  

*Cookies*  
HTTP doesn't know about any prev/future requests. Cookies is good for tracking state and generated by the server to give to the client.  
```
// Caches Cookie
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly

// Returns Cookie
HTTP/2 200
Cookie: myAppCookie=tasty
```
Allows the server to remember things like the language preference of the user, or the user's authentication credentials. Also used to track and share.  

*JavaScript Modules*  
Modules allow for the partitioning and sharing of code. Since modules create a file-based scopre for the code they represent, it must be exported from one file and imported to another file.  
To import, use the format: `const X = require('y');`  
As example, importing the `Express library` installed using NPM and exported from the local file `./database.js`.  
```
const express = require('express');
const DB = require('./database.js');
```
Exporting something from own code uses `module.exports` global variable:
```
functional alertDis(msg) {
    alert(msg);
}

module.exports = {
    alertDisplay,
};
```

*ES Modules*  
ES Modules wiht Node.js needs specification
```js
{
  "name": "service",
  "version": "1.0.0",
  "description": "This demonstrates a service for a web application.",
  "type": "module",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
Importing with ES modules has the format `import X from 'y';` such as `import express from 'express';  express().listen(3000);`  
Use `export` for importing from your own code.
```
export function alertDisplay(msg) {
    console.log(msg);
}

import { alertDisplay } from './alert.js';
alertDisplay('called from main.js');
```

*In the browser*  
Key thing to understand is they can only be called from other modules. ES module can be specified by including type `module`. 
```html
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```
An event handler or explicity adding a function to global widow. In example, the module will be called upon botton or key is pressed.  
```html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```

*Fetch*  
The preferred way to make HTTP requests. Fetch takes a URL and returns a promise. `then` function takes a callback that is async called when URL is grabbed. If returned is a type of json, `json` can be used on the response to convert to JavaScript. Example:  
```
fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
// RESPONSE
{
    author: 'Kyle Simpson',
    quote: "There's nothing more permanent than a temporary hack."
}
```
[Practice CodePen](https://codepen.io/Joshua-S25/pen/dPyRWdL)

*Node Web Service*  
Use `F5` in VSCode in order to run backed and server frontend to the browser. 

*Express*  
Provides support for routing requests to service endpoints, manipulating HTTP with JSON body, generate HTTP responses, and uses middleware to add functionality.  
`npm install express`  
-> Defining Routes  
`const express = require('express');` + `const app = express()` -> `app.listen(8080);`  
HTTP endpoints are implemented through Express using HTTP paths. A route function that handles an HTTP GET request, use `get`. The `get` funciton has two parameters, the URL path and call back function. Path is used to match.  
```js
app.get('/store/provo', (req, res, next) => {
  res.send({ name: 'provo' });
});
```
The response function:  
`req`  - Request Object  
`res`  - Response Object  
`next` - Routing function when another function should generate a reponse  
The example above compares the routing function patterns in the order they're added to Express app object. Two matches will output the first one will called and given the next matching function in the `next` parameter.  

Other HTTP verbs like POST and DELETE can be appended to `app`.  
```js
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));
```

*Using Middleware*  
The standard pattern has two pieces: Mediator and middleware. Middleware represents componentized pieces of functionality. The mediator loads the middleware components and determines order of operation. The mediator gets a request, passes it around the middleware components. This pattern makes Express the mediator and middleware functions is middleware components.  

Some functions are available as middleware by default while others need NPM install or to be created wth Express. Routing is a middleware but only runs if it matches, but normal middleware functions are called with every HTTP request unless a middleware function precedes and wasn't called.  
`Path Example: HTTP Req -> req | midware | next -> req | midware | res -> HTTP res`  
`Syntax Example: function middlewareName(req, res, name)`  

Order and remembering to use `next()` when needed is important. When using middleware, you can make your own, use builtin, or thrid party middleware. An example of third party middle ware looks like this:  
`npm install cookie-parser`  
```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});
```
*Error Handling Middleware*  
Similar idea to normal middleware formatting, but involving a fourth parameter, `err`:  
```js
function errorMiddlewareName(err, req, res, next)
```
*Debugging an Express Web Service*  
When using `F5` set breakpoints to pause and observe the variables. Also use `F11` or the `Step in` button to explore the functions after breakpoint!  

*Endpoints*  
Uses `GET`, `POST`, `DELETE`, etc for calling endpoints and their items. 
```js
app.post('/api/auth', async (req, res) => {
  res.send({ email: '' });
});

app.put('/api/auth', async (req, res) => {
  res.send({ email: '' });
});

app.delete('/api/auth', async (req, res) => {
  res.send({});
});

app.get('/api/user', async (req, res) => {
  res.send({ email: '' });
});
```
This is the how endpoints are set while you can call `fetch('endpoint')` and use `.catch` and `.then` in order to process the data.  

*Hashed*  
Use `bcrypt` in order to hash passwords in order to prevent access to sensitive information. Use tokens/cookies to act as a key.  
``` js
const bcrypt = require('bcryptjs');

const users = [];

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
  };
```

# Database  
*Uploading Files*  
Files can be uploaded using HTML `input` elements and type `file` with the `Multer` NPM packages on the backend.  

Frontend Code  
The frontend code and event handler for the selected file only accepts file types `.png, .jpeg, .jpg`. There can also be another `div` to display the image.  
`<input type="file" id="fileInput" name="file" accept=".png, .jpeg, .jpg" onchange="uploadFile(this)" />`  

The JavaScript takes care of uploading the file to server and returns it using the filename.  
```js
async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/${data.file}`;
    } else {
      alert(data.message);
    }
  }
}
```
*Backend Code*  
`npm install express multer`  
Multer handles the files requrest, enforces limits  
```js
const upload = multer({
  storage: multer.diskStorage({
    destination: 'public/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});
```
Sets up the file using multer and prepares limitaitons.  

*Where to store*  
Placing files on a server may not be best in the long run because:  
1 - You only have so much space. If the space is used up, the server will fail and need to be rebuilt  
2 - Servers often are replaced and new versions are released which may cause some data lose  
3 - Storage is often not backed up on servers, so data can be lost then  
4 - If there are multiple application servers, can't assume you're requesting from the correct server  

Use a dedicated storage service with guarenteed durability.  

*MongoDB Atlas*  
The sytax and uses of Mongo follow after JavaScript synstax and object usage. The tags don't need to be strict which means you can have unique tags or missing common tags.  

```js
[
  {
    _id: 'NUMS',
    name: 'Loft',
    last_revoiew: {
      $date: `20XX-XX-Other-Data`,
    },
    price: 3000,
 }
]
```

If you are looking to find or "query" some items from your DB, it would look like this:  
```js
// find all homes
db.house.find();
// find houses with two + bedrooms
db.house.find({ beds: { $gte: 2} });
// find house with text 'modern' or 'beach' in summary
db.house.find({ summary: /(modern|beach)/i });
```

