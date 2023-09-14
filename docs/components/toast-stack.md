# rux-toast-stack



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                         | Type                                                           | Default       |
| ---------- | ---------- | ----------------------------------- | -------------------------------------------------------------- | ------------- |
| `position` | `position` | position of toast stack in viewport | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'top-right'` |


## Methods

### `addToast(props: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) => Promise<void>`

adds an individual toast to the stack with the set props passed in as an object

#### Returns

Type: `Promise<void>`




## Slots

| Slot          | Description         |
| ------------- | ------------------- |
| `"(default)"` | where all toasts go |


## Dependencies

### Depends on

- [rux-toast](../rux-toast)

### Graph
```mermaid
graph TD;
  rux-toast-stack --> rux-toast
  rux-toast --> rux-icon
  style rux-toast-stack fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
