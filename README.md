
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#live-demo)

## ➤ Live demo

<p class="codepen" data-height="311" data-theme-id="0" data-default-tab="html,result" data-user="marius2502" data-slug-hash="MMzboL" style="height: 311px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="bronco-button">
  <span>See the Pen <a target="_blank" href="https://codepen.io/marius2502/pen/MMzboL/">
  bronco-button</a> by marius2502 (<a target="_blank" href="https://codepen.io/marius2502">@marius2502</a>)
  on <a target="_blank" href="https://codepen.io">CodePen</a>.</span>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

```
$ npm i https://github.com/marius2502/bronco-template.git
```

```javascript
import '@marius/broncotemplate/dist/main';
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#bronco-template)

## ➤ bronco-template

Left sidebar. To include icons following has to be included in index.html  => <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

### Properties

| Property       | Type          | Default      | Description                                      |
|----------------|---------------|--------------|--------------------------------------------------|
| `dragBtn`      | `HTMLElement` | **required** |                                                  |
| `hideOnMobile` | `boolean`     | true         | Makes the navbar disappear on mobile devices     |
| `mobile`       | `boolean`     | false        | If true, either navbar is completely hidden, when hideOnMobile = true or only leftHeader and rightHeader are shown |
| `navItems`     | `string[]`    |              | Takes an array to set (minimum: 3, maximum 5) nav items, of this component |
| `selectedItem` | `string`      | "Components" | Sets selected item. Default is first item        |
| `sideBar`      | `HTMLElement` | **required** |                                                  |

### Events

| Event      | Description                                      |
|------------|--------------------------------------------------|
| `selected` | Dispatches a CustomEvent when nav item is selected. Selected item is stored in detail of Custom event |

### CSS Custom Properties

| Property                | Description                         |
|-------------------------|-------------------------------------|
| `--bg-color`            | Background color of navitem         |
| `--bg-color-hover`      | Hover background color of navItem   |
| `--bg-color-icon-hover` | Hover color of icon                 |
| `--color`               | Font color                          |
| `--padding-top`         | Defines where navItems should begin |
| `--primary-color`       | Change primary color easily         |
| `--sidebar-min-height`  | Sidebar min height. Default: 20%    |
| `--sidebar-width`       | Sidebar width. Default: 20%;        |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Marius Bongarts" src="https://avatars2.githubusercontent.com/u/38838885?s=460&v=4" width="100">](https://bongarts.net/) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| [Marius Bongarts](https://bongarts.net/)         | [You?](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
| [marius@bongarts.net](mailto:marius@bongarts.net) |                                                  |
| 🔥                                               |                                                  |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [ISC](https://opensource.org/licenses/ISC).