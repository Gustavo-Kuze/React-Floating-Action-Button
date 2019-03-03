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
TODO...

### Extra Styles
TODO...

### Material Colors
TODO...


