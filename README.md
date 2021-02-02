# Targets

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
```

## Requirements

> Create your target: target, actions, duedate, startdate, spentTime, status=new
> Update your target: target, status, duedate, startdate
> Logtime: append your spentTime for your target
> Delete your label: hard delete
> Create your taget labels: existing labels, new labels
> Create new label: label, color
> Update your label: label, color
> Delete your label: hard delete

## Exercises

### Exercise 001

> Targets

```javascript
const target = {
  id: 1,
  title: "Learn ReactJS Fundamentals",
  description: `
    0. Create new app
    1. JSX
    2. Display components with props
    3. Component State
    4. LifeCycle
    5. Conditional rendering
    6. Lists and Keys
    7. Forms
    8. Lifting State Up
    9. Composition vs Interitance
    10. Thinking in React
  `,
  labels: [
    {
      id: 1,
      title: "career",
    },
  ],
};

const label = {
  id: 1,
  title: "career",
  color: "#ff0000",
};
```

> Todo

- [ ] Nav

> DevHost

- https://js-academy-35af4.web.app/
- https://js-academy-35af4.firebaseapp.com/

### Main Resources

> 1. PropTypes

- https://reactjs.org/docs/typechecking-with-proptypes.html
- https://github.com/facebook/prop-types

### Resources

> 1. Drag&Drop

- https://codepen.io/alexreardon/project/editor/ZyNMPo
- https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/installation.md

> 2. Feather Icons

- https://feathericons.com/
- https://github.com/feathericons/react-feather
