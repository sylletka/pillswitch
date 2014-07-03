pillswitch
==========

Jquery plugin to replace checkboxes with yes/no graphical switches

Usage
==========
Include the plugin and the stylesheet:
```html
<link href="/css/pillswitch.css" type="text/css" rel="stylesheet">
<script src="/js/pillswitch.js" type="text/javascript"></script>
```

```javascript
$( document ).ready(function() {
  $('.myCheckbox').pillswitch();
});
```

Options
---

'yes' = The string to be used as "yes" value

'no' = The string to be used as "no" value

example:

```javascript
$( document ).ready(function() {
  $('.myCheckbox').pillswitch({
    'yes' : 'Oui',
    'no' : 'Non'
  });
});
```

