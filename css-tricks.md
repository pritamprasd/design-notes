### CSS related:
- https://1linelayouts.glitch.me/

#### Super centre element:
[code](./code/css-related/grid-center)
```html
<div class="parent-1">
    <div class="child-1">&#9787;</div>
</div>
```
```css
.parent-1 {
    display: grid;
    place-items: center;
}
```

#### simple grid design with `grid-template-rows` & `grid-template-columns`
[code](./code/css-related/simpler-grid)
```html
<div class="parent-grid">
    <div class="row1"></div>
    <div class="row2"></div>
    <div class="row3"></div>
</div>
```
```css
.parent-grid {
    display: grid;
    grid-template-rows: 20% 30% 50%;
}
```

#### 
