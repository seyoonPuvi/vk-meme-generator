import {Component} from 'react'
import {
  Container,
  MainContainer,
  Heading,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  Button,
  MemeContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].optionId,
    appliedFontSize: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    generateMeme: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickGenerateMemeBtn = event => {
    event.preventDefault()
    const {fontSize, topText, imageUrl, bottomText} = this.state

    this.setState({generateMeme: true, appliedFontSize: fontSize})
  }

  render() {
    const {
      topText,
      bottomText,
      imageUrl,
      generateMeme,
      fontSize,
      appliedFontSize,
    } = this.state

    return (
      <Container>
        <MainContainer onSubmit={this.onClickGenerateMemeBtn}>
          <Heading>Meme Generator</Heading>

          <InputContainer>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              placeholder="Enter the Image Url"
              onChange={this.onChangeImageUrl}
              value={imageUrl}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="topText">Top Text</Label>
            <Input
              id="topText"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangeTopText}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              id="bottomText"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="fontSize">Font Size</Label>
            <Select
              value={fontSize}
              onChange={this.onChangeFontSize}
              id="fontSize"
            >
              {fontSizesOptionsList.map(each => (
                <Option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <Button type="submit">Generate</Button>
        </MainContainer>

        {generateMeme && (
          <MemeContainer imageUrl={imageUrl} data-testid="meme">
            <Text size={appliedFontSize}>{topText}</Text>{' '}
            {/* Using appliedFontSize */}
            <Text size={appliedFontSize}>{bottomText}</Text>
          </MemeContainer>
        )}
      </Container>
    )
  }
}

export default MemeGenerator
