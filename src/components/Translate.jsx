import React, { useState, useEffect } from 'react';
import '../assets/styles/translate.css'
import Image5 from '../images/img4.png';
import '../assets/styles/Places.css'


import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';
import axios from 'axios';


export default function Translate() {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    const [detectLanguageKey, setdetectedLanguageKey] = useState('')
    const [a, setA]= useState('');
    const getLanguageSource = () => {
        axios.post(`https://libretranslate.de/detect`, {
            q: inputText
        })
        .then((response) => {
            setdetectedLanguageKey(response.data[0].language)
            setA(response.data[0].language)
        })
    }
    const translateText = () => {
        setResultText(inputText)

        getLanguageSource();

        let data = {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }
        axios.post(`https://libretranslate.de/translate`, data)
        .then((response) => {
            setResultText(response.data.translatedText)
        })
    }

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    useEffect(() => {
       axios.get(`https://libretranslate.de/languages`)
       .then((response) => {
        setLanguagesList(response.data)
       })

       getLanguageSource()
    }, [inputText])

    return (
        <div className='w-4/5 m-auto mt-5'>
    <br/>
            
            <div  className='co container-fluid flex-row col-md-10 col-sm-9 col-sx-10 mt-5'>
                <div>
                    <div className='w-ful text-center my-10 space-y-5'>
                        <h1 id='places' className='text-4xl font-bold'>Hala 22 Translate</h1>
                        <p  className='text-lg mb-5'>Specifically designed for international travelers, "Hala 22 Translate" can automatically translate phrases into arabic and dozens of languages.</p>
                    </div>
                <div className='row'> 
                    <div className='app-body pt-3 col-sm-7 col-xs-12 container-fluid flex-row'>
                        <div>
                            <Form>
                                <Form.Field 
                                    control={TextArea}
                                    placeholder='Type Text to Translate..'
                                    onChange={(e) => setInputText(e.target.value)}
                                />

                                <p>Language detected :  {a} </p>

                                <select className="language-select" onChange={languageKey}>
                                    <option>Please Select Language..</option>
                                    {languagesList.map((language) => {
                                        return (
                                            <option value={language.code}>
                                                {language.name}
                                            </option>
                                        )
                                    })}
                                </select>

                                <br/>

                                <Form.Field
                                    className='inputfield'
                                    control={TextArea}
                                    placeholder='Your Result Translation..'
                                    value={resultText}
                                />

                                <Button 
                                class="bouton"
                                    onClick={translateText}
                                >
                                    <Icon name='translate' />
                                    Translate</Button>
                            </Form>
                        </div>
                    </div>
                    <div className='app-body pt-3 col-sm-5 col-xs-12 container-fluid flex-row'>
                        <img src={Image5} className="img-fluid imago pl-5 mt-5"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
