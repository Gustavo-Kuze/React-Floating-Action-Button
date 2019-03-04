# React-Floating-Action-Button
A dead simple React component that works similar to Android's Action Button
___

### Getting Started
1. First, You need to install It, just like You would do with most any NPM packages:
```
npm i --save react-floating-action-button
```

2. Then, You need to import the library component within your own component
``` javascript
import React from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
```

3. You can now start using the FAB components!
``` javascript
export default const YourAwesomeComponent = () => {
    return (
        <Container>
            <Link href="#"
                tooltip="Create note link"
                icon="far fa-sticky-note" />
            <Link href="#"
                tooltip="Add user link"
                icon="fas fa-user-plus" />
                className="fab-item btn btn-link btn-lg text-white"
            <Button
                tooltip="The big plus button!"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => alert('FAB Rocks!')} />
        </Container>
    )
}
```


### About Components
- **Container** - It's simply a nav element that contains fab-container in its class list. You must involve your fab-items inside a Container, so the default styles are applied properly. Note that the last child will be recognized as the bigger button that is always visible and triggers the menu opening on hover.
- **Button** - A special button element that has the class fab-item and an "i" element as its first child. You can add a function the its click by passing an "onClick" just like you would with a regular button.
- **Link** - Works just like the Button component, but instead of a "onClick", You need to pass a "href" prop to It.

**NOTE**: All components support props.children rendering, which in combination with custom styles, can give You a lot of customization options.

### Extra Styling
- **Container** - You can add custom classes using the "className" property, and also add custom styles by passing a "styles" property with an object just like you would do with the regular style.
- **Button and Link** - Supports all mentioned for the Container, plus gives You the option to add custom icon classes by passing an "icon" string property, and also custom icon styles by passing an object property "iconStyles"

### Material Colors
React-floating-action-button also exports two objects: lightColors and darkColors. These objects contain a few preset material colors that You can use when passing custom styles to the components, and help You to keep the overall design concise.

**Usage**
``` javascript
...
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'
...
<Container>
    <Button
     tooltip="The big plus button!"
     styles={{backgroundColor: darkColors.lighterRed, color: lightColors.white}}
     />
</Container>

```
TODO: list of colors
