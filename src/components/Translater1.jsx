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


export default function Translater1() {

    const [l,setL] = useState()
    const [to,setTo] = useState('ar')
    const [inputText, setInputText] = useState('')
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [languagesList, setLanguagesList] = useState([])



    const translate = () =>{
        const options = {
            method: 'POST',
            url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
            params: {
                'to[0]': `${selectedLanguageKey}`,
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
            },
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'e907d761b1msh049e2abe27a0c84p170478jsn7db2417a1631',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            data: `[{"Text":"${inputText}"}]`
        };

        axios.request(options)
        .then(function (response) {
            setL(response.data[0].translations[0].text);
            console.log(l)
            
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    useEffect(() => {
        axios.get('https://libretranslate.com/languages')
        .then((response) => {
         setLanguagesList(response.data)
        })
     }, [])





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
                                    placeholder={l}
                                    
                                />

                                <Button 
                                class="bouton"
                                    color='blue'
                                    onClick={()=>translate()}
                                >
                                    <Icon name='translate'  />
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

