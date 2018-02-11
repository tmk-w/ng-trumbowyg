# NgTrumbowyg

NgTrumbowyg is an angular 5 implementation for Trumbowyg WYSIWYG editor. Requires ```trumbowyg``` package from npm.

## Installation

1. Install npm module:

```
npm install ng-trumbowyg
```

2. Modify ```assets``` and ```styles``` section in ```.angular.cli.json```

```js
"assets": [
      "assets",
      { "glob": "icons.svg", "input": "../node_modules/trumbowyg/dist/ui/", "output": "./trumbowyg/" }
    ]
...
"styles": [
        "styles.scss",
        "../node_modules/trumbowyg/dist/ui/trumbowyg.min.css"
      ]
```

3. Add TrumbowygModule to the main module

```js
import { TrumbowygModule } from 'ng-trumbowyg';

imports: [
        TrumbowygModule,
        ...
    ]
```

## Usage

```html
<ng-trumbowyg [(ngModel)]="property"></ng-trumbowyg>
```

## Properties

- placeholder - type: string, default: null, description: Text for the input
- disabled - type: boolean, default: false, description: Whether to disable editor 

