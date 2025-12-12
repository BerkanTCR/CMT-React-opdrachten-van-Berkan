# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 6 stappen:

# 1. Wat moet ik maken?
Ik (Berkan) moet een eenvoudige To-Do applicatie bouwen in React. De applicatie moet een inputveld hebben waar ik een To-Do kan invoeren.
Ook moet ik een nieuwe To-Do kunnen toevoegen met een knopje.
De lijst met To-Do's moeten onder het formulier verschijnen. Ik hoef de To-Do's niet te verwijderen of af te vinken. Styling is niet nodig, en de focus ligt meer op het denken in code en de basis van React. (Het lijkt op de vorige Twitter-opdracht.)


# 2. Welke componenten heb ik nodig?
De componenten die ik nodig heb zijn: 
ToDoList.jsx
ToDoItem.jsx
CreateToDo.jsx

# 3. Welke state heb ik nodig?
Een To-Do useState, En teskt in de To-Do is ook een useState.

# 4. Wat is de flow?
Gebruiker begint met lege To-Do List
Gebruiker typt To-Do in.
Gebruiker klikt op Create
To-Do item wordt getoond
To-Do wordt toegevoegd en de vorige To-Do verdwijnt en reset.

# 5. Pseudo-code
Start met een lege To-Do
Gebruiker typt To-Do in
Bij klikken op Create:
Toon To-Do
Reset invoerveld

# 6. De 3-check
Heeft elk component één taak?

Ja, de ToDoList.jsx toont elke To-Do item in de app.jsx. De To-Do item component is de ToDoItem.jsx is letterlijk de To-Do zelf. Met de CreateToDo.jsx maak je een To-do item aan.

Zit de state op de juiste plek?

Ja, de state staat op het hoogste punt waar deze nodig is: in App.jsx.
Hier wordt de lijst met To-Do’s beheerd en bijgewerkt.
Andere componenten (zoals ToDoList en CreateToDo) krijgen de data of functies via props, waardoor zij zelf geen extra state hoeven te hebben.
Dit voorkomt dubbele data en maakt de structuur overzichtelijk.



Verandert er iets? → dan gebruik je state

In deze applicatie verandert de lijst met To-Do’s wanneer:

je een nieuwe To-Do toevoegt,

je een To-Do verwijdert,

of je een To-Do eventueel zou aanvinken als voltooid.

Omdat deze gegevens veranderen en opnieuw gerenderd moeten worden, gebruik je state. Hierdoor wordt de UI automatisch bijgewerkt wanneer de data verandert.
