# Detail explanation for the syntax used

## layout.html

# 1. 
```text
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
` The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser. `

```text
class="small text-end text-muted"
```

`
small: size
text-end: End aligned text on all viewport sizes.
text-muted: Reset a text or link’s color, so that it inherits the color from its parent.
`

Use position: relative; on the container (a <div> containing all the content) and absolutely position the child elements. The child elements inside the container will be positioned relative to the container so it would be pretty easy to lay everything out to your needs.