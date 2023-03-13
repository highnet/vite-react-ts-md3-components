import Button from "./Button";
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const incrementCounter = () => {
    setCount(count + 1); // This line calls the state setter function with the new counter value

  };

  return (
    <div className="App">
      <Button
        configuration="filled"
        icon={false}
        iconName={undefined}
        onClick={incrementCounter}
      >
       <div className="text text-label text-label-large"> Click Me </div>
      </Button>
      <Button
        configuration="filled"
        icon={true}
        iconName={"search"}
        onClick={incrementCounter}
      >
       <div className="text text-label text-label-large"> Click Me </div>
      </Button>
      <Button
        configuration="outlined"
        icon={false}
        iconName={undefined}
        onClick={incrementCounter}
      >
       <div className="text text-label text-label-large"> Click Me </div>
      </Button>
      <Button
        configuration="outlined"
        icon={true}
        iconName={"search"}
        onClick={incrementCounter}
      >
       <div className="text text-label text-label-large"> Click Me </div>
      </Button>
      <p className="text text-display text-display-large">Counter: {count}</p>


    <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"70px", gap:"40px"}}>

      <div style={{boxSizing:"border-box", display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"24px", gap: "24px", border:"1px solid #79747E", borderRadius:"16px"}}>
        <div className="text text-display text-display-large">Display Large - Roboto 57/54 . 0</div>
        <div className="text text-display text-display-medium">Display Medium - Roboto 45/52 .  0</div>
        <div className="text text-display text-display-small">Display Small - Roboto 36/44 . 0</div>
      </div>

      <div style={{boxSizing:"border-box", display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"24px", gap:"24px", border:"1px solid #79747E", borderRadius:"16px"}}>
        <div className="text text-headline text-headline-large">Headline Large - Roboto 32/40 . 0</div>
        <div className="text text-headline text-headline-medium">Headline Medium - Roboto 28/36 . 0</div>
        <div className="text text-headline text-headline-small">Headline Small - Roboto 24/32 . 0</div>
      </div>

      <div style={{boxSizing:"border-box", display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"24px", gap:"24px", border:"1px solid #79747E", borderRadius:"16px"}}>
        <div className="text text-title text-title-large">Title Large - Roboto Regular 22/28 . 0</div>
        <div className="text text-title text-title-medium">Title Medium - Roboto Medium 16/24 . +0.15</div>
        <div className="text text-title text-title-small">Title Small - Roboto Medium 14/20 . +0.1</div>
      </div>

      <div style={{boxSizing:"border-box", display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"24px", gap:"24px", border:"1px solid #79747E", borderRadius:"16px"}}>
        <div className="text text-label text-label-large">Label Large - Roboto Medium 14/20 . +0.1</div>
        <div className="text text-label text-label-medium">Label Medium - Roboto Medium 12/16 . +0.5</div>
        <div className="text text-label text-label-small">Label Small - Roboto Medium 11/16 . +0.5</div>
      </div>

      <div style={{boxSizing:"border-box", display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"24px", gap:"24px", border:"1px solid #79747E", borderRadius:"16px"}}>
        <div className="text text-body text-body-large">Body Large - Roboto 16/24 . +0.5</div>
        <div className="text text-body text-body-medium">Body Large - Roboto 16/24 . +0.5</div>
        <div className="text text-body text-body-small">Body Large - Roboto 16/24 . +0.5</div>
      </div>

    </div>

    <div style={{display: "flex", flexDirection:"row", alignItems:"flex-start", padding:"50px 60px", gap:"36px"}}>
      <div className="elevation-light-1" style={{background:"linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))", width:"80px", height:"80px", borderRadius:"16px"}}></div>
      <div className="elevation-light-2" style={{background:"linear-gradient(0deg, rgba(103, 80, 164, 0.08), rgba(103, 80, 164, 0.08))", width:"80px", height:"80px", borderRadius:"16px"}}></div>
      <div className="elevation-light-3" style={{background:"linear-gradient(0deg, rgba(113, 90, 174, 0.11), rgba(113, 90, 174, 0.11))", width:"80px", height:"80px", borderRadius:"16px"}}></div>
      <div className="elevation-light-4" style={{background:"linear-gradient(0deg, rgba(103, 80, 164, 0.12), rgba(103, 80, 164, 0.12))", width:"80px", height:"80px", borderRadius:"16px"}}></div>
      <div className="elevation-light-5" style={{background:"linear-gradient(0deg, rgba(103, 80, 164, 0.14), rgba(103, 80, 164, 0.14))", width:"80px", height:"80px", borderRadius:"16px"}}></div>
    </div>

    </div>
  )
}

export default App
