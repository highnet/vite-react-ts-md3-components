<h1 align="center">
  TRMD3 </br></br>
Tiny React Material Design 3
<div align="center""> 
<br/>
<img src="/src/assets/tiny-react-md3-logo.png" width="250px"/>  
</div>
<h1>

##

<div align="center""> 
<img alt="npm" src="https://img.shields.io/npm/v/vite?style=for-the-badge">
<img alt="node-current" src="https://img.shields.io/node/v/vite?style=for-the-badge">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/highnet/Tiny-React-MD3?style=for-the-badge">
<img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/highnet/Tiny-React-MD3?style=for-the-badge">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/highnet/Tiny-React-MD3?style=for-the-badge">
</div>

<div align="center">
❤️ You like Figma? ❤️ </br>
❤️ You Like Material Design 3? ❤️</br>
❤️ You like React? ❤️ </br>
🐝 Then you love Tiny React MD3! 🐝 </br>

[Figma Material Design 3 Kit](https://www.figma.com/community/file/1035203688168086460) 🤝 [React.ts](https://developer.okta.com/blog/2022/03/14/react-vite-number-converter) = [Tiny React MD3](https://github.com/highnet/Tiny-React-MD3/) </br>

</div>

- Quickly transform your design kit prototypes into stunning and modern web applications
- A set of easy-to-use, high-peformance and customizable components that follow the Material Design 3 principles and aesthetics
- Developer handoffs made easy with ensured parity between the Figma material Design 3 Kit and React

## 🌐 Home Page

The Official TRMD3 home page

https://trmd3.com/

## ❓ How to get started?

- [Running your first development environment](https://github.com/highnet/Tiny-React-MD3/tree/master#-running-your-first-development-environment)
- [Documentation](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md)

## 📚 Resources

- https://m3.material.io/
- https://materialpalettes.com/
- https://www.figma.com/community/file/1035203688168086460
- https://www.figma.com/file/new/Material-Symbols?node-id=0%3A1&t=RzoSzcWGopbfCZRs-0
- https://fonts.google.com/icons
- https://www.figma.com/community/plugin/1034969338659738588
- https://developer.okta.com/blog/2022/03/14/react-vite-number-converter
- https://colornamer.robertcooper.me/

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
</div>

# 🤓👆 Running your first development environment:

1. Clone the repository and navigate to it
2. Type `npm install` into the terminal, this will download all required dependencies
3. Type `npm run dev` (or, if you want to expose the website to your local network, use `npm run dev -- --host` instead) into the terminal, this will create a localhost development environment
4. That's it! Get to building and have fun!

# 🔥 Deploying with [Firebase](https://firebase.google.com/)

1. Go to https://firebase.google.com/ and start a Firebase project.
2. Navigate to the Tiny-React-MD3 root folder and type `npm install -g firebase-tools` into the terminal.
3. Type `firebase login` and follow the instructions to log in using the google account that created the Firebase project.
4. Type `firebase init hosting` into the terminal. Select `Use an existing project` and choose the Firebase project from the list.
5. Use `dist` as your public directory
6. Configure the project as a single-page app by typing `y` when prompted.
7. Type `npm run deploy` into the console to build and deploy the app using Firebase.
8. (Optional) Configure "Firebase Storage" inside your Firebase project to host and serve any static assets.

## 🚧 Progress In Development

| Component | Light Theme | Dark Theme | Frame | Component |
| :-------: | :--------: | :-------: | :---: | :-------: |
| 📛 [Badges](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-badge) | ✅ | ✅ | [BadgesFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Button/Frame/ButtonsFrame.tsx) | [Badge.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Badge/Badge.tsx) |
| ⏬ Bottom app bar | 🚧 | 🚧 | | |
| 🔽 Bottom sheets | 🚧 | 🚧 | | |
| 🕹️ [Buttons](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-buttons) | ✅ | ✅ | [ButtonsFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Button/Frame/ButtonsFrame.tsx) | [Button.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Button/Button.tsx) |
| 🃏[Stacked Cards](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-stacked-card) | ✅ | ✅ | [StackedCardsFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/Frame/StackedCardsFrame.tsx) | [StackedCard.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Cards/StackedCard/StackedCard.tsx) |
| 🪪 [Horizontal Cards](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-horizontal-card) | 🚧 | 🚧 | | |
| ☑️ [Checkbox](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-checkbox) | ✅ | ✅ | [CheckBoxesFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Checkbox/Frame/CheckboxesFrame.tsx) | [Checkbox.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Checkbox/Checkbox.tsx) |
| ℹ️ [Assist Chips](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%E2%84%B9%EF%B8%8F-assist-chip) | ✅ | ✅ | [AssistChipsFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/Frame/AssistChipsFrame.tsx) | [AssistChip.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/AssistChip/AssistChip.tsx) |
| 🥅 [Filter Chips](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-filter-chip) | 🚧 | 🚧 | | |
| 🔌 [Input Chips](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-input-chip) | ✅ | ✅ | [InputChipsFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/InputChip/Frame/InputChipsFrame.tsx) | [InputChip.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Chips/InputChip/InputChip.tsx) |
| 😉 [Suggestion Chips](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-suggestion-chip) | 🚧 | 🚧 | | |
| 📅 Date Pickers | 🚧 | 🚧 | | |
| 💬 Dialogs | 🚧 | 🚧 | | |
| 👉 [Horizontal Divider](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-horizontal-divider) | ✅ | ✅ | [HorizontalDividersFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Dividers/HorizontalDivider/Frame/HorizontalDividersFrame.tsx) | [HorizontalDivider.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Dividers/HorizontalDivider/HorizontalDivider.tsx) |
| 👆 [Vertical Divider](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-vertical-divider) | ✅ | ✅ | [VerticalDividersFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Dividers/VerticalDivider/Frame/VerticalDividersFrame.tsx) | [VerticalDivider.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Dividers/VerticalDivider/VerticalDivider.tsx) |
| 💟 [Icons](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-icons) | ✅ | ✅ | [IconsFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Icon/Frame/IconsFrame.tsx) | [Icons.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Icon/Icon.tsx) |
| 📝 Lists | 🚧 | 🚧 | | |
| 📚 Menus | 🚧 | 🚧 | | |
| 🧭 Navigation bar | 🚧 | 🚧 | | |
| 🗄️ Navigation drawer | 🚧 | 🚧 | | |
| 🚈 Navigation rail | 🚧 | 🚧 | | |
| 🔄 Progress indicators | 🚧 | 🚧 | | |
| 🔘 [Radio Button](https://github.com/highnet/Tiny-React-MD3/tree/master/src#-radio-button) | ✅ | ✅ | [RadioButtonsFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Radio%20Button/Frame/RadioButtonsFrame.tsx) | [RadioButton.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Radio%20Button/RadioButton.tsx) |
| 🔍 Search | 🚧 | 🚧 | | |
| 📑 Side sheets | 🚧 | 🚧 | | |
| 🎚️ Sliders | 🚧 | 🚧 | | |
| 🥨 Snackbar | 🚧 | 🚧 | | |
| 🔦 [Switch](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-switch) | ✅ | ✅ | [SwitchesFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Switch/Frame/SwitchesFrame.tsx) | [Switch.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Switch/Switch.tsx) |
| 📑 Tabs | 🚧 | 🚧 | | |
| 📜 Text fields | 🚧 | 🚧 | | |
| ⌛ Time pickers | 🚧 | 🚧 | | |
| ⏫ Top app bar | 🚧 | 🚧 | | |
| 🔤 [Typography](https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-typography) | ✅ | ✅ | [TypographiesFrame.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Typography/Frame/TypographiesFrame.tsx) | [Typography.tsx](https://github.com/highnet/Tiny-React-MD3/blob/master/src/Typography/Typography.tsx) |

✅ Finished
🚧 Under Construction

## 👥 Collaborators:

- [Joaquin 'Highnet' Telleria](https://www.linkedin.com/in/joaquin-telleria-57957aa5/)
  - [highnet.xyz](https://www.highnet.xyz)
- [Maria 'Uebersetzerin' Palma](https://www.linkedin.com/in/maria-palma-a9a101189/)
  - [mariapalma.at](https://mariapalma.at/)
- [Manuel 'Manucapo' Telleria](https://manucapo.me/)
  - [manucapo.me](https://manucapo.me/)

## 🛎️ Feedback

If you have any feedback, please reach out to me at joaquintelleria@gmail.com.
I hope you find this project useful and interesting. If you have any feedback, suggestions, or questions, please feel free to contact me.

<i>If you read this far, here is a cookie! 🍪 Write me a private message and let’s talk! 😊 I hope to hear from you soon!</i>
