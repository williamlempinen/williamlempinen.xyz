import TextPressure from './blocks/TextAnimations/TextPressure/TextPressure'

const App = () => {
  return (
    <div style={{ position: 'relative', height: '300px' }}>
      <TextPressure
        text="Hello!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  )
}

export default App
