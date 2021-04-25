import React,{Component} from 'react';
import Header from '../Header/header';
import Card from '../Card/card';

class contactMe extends Component { 
    render() { 
        const Name = "Name 1";
        const Name2 = "name2";
        const Name3 = "Name3";

        const sample1 = "Sample text1";
        const sample2 = "Sample text2";
        const sample3 = "Sample text3";

        return ( 
            <div>
                <Header/>
                <h1>This is Contact Me page</h1>
                <Card sampleName={Name} sampleText={sample1}/>
                <Card sampleName={Name2} sampleText={sample2}/>
                <Card sampleName={Name3} sampleText={sample3}/>
                
            </div>
         );
    }
}
 
export default contactMe;