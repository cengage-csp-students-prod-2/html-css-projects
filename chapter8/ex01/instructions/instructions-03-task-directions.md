## Task 03
Below the  `h2` element, insert a `table` element. Add a `caption` element with the text **Rental Rates**. 

In the *styles.css* file, below the mobile style rule for `.map`, add the following comment:
```css
/* Style rules for table elements */
```
Below the comment, add the following style rules:
```css
table {
    border: 1px solid #373684;
    border-collapse: collapse;
    margin: 0 auto;
    width: 100%;
}

caption {
    font-size: 1.5em;
    font-weight: bold;
    padding: 1%;
}

th, td {
    border: 1px solid #373684;
    padding: 2%;
    }
th {
    background-color: #373684;
    color: #fff;
    font-size: 1.15em;
}
tr:nth-child(odd) {
    background-color: #b7b7e1;
}
```