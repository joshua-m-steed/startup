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
- `border` - color width style - Sets border where any or all values may be (#fad solid medium  
- `border-radius` - unit - Size of border radius (50%)  
- `box-shadow` - x,y, offset radius color - Creates a shadow (2px 2px 2px gray)  
- `columns` - number - Number of text columns (3)  
- `column-rule` - colod width style - Sets the border between columns (solid thin black)  
- `color` - color - Sets text color (rgb(128, 0, 0)  
- `cursor` - type - Sets the cursor display when over element (grab)  
- `display` - type - Defines how to display element with its children (none)  
- `filter` - filter-function - Applies visual filter (grayscale(30%)  
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
`RGB function` - Red, green, and blue as a percentage or numb (0-255) w/optional alpha opacity (rgb(128, 255, 128, 0.5)  
`HSL` - Hue, saturation, and light, w/optional opacity. Hue is position on the 365 degree wheel. Saturation is how gray the color is. Light is how bright the color is. (hsl(180, 30%, 90%, 0.5)  

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
