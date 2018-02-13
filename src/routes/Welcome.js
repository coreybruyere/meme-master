import React, { Component } from 'react';
import Card from '../components/Card';
import Alert from '../components/Alert';

class Welcome extends Component {
  render() {
    return (
      <Card wide={true}>
        <Alert alertType='success'>Congrats, you signed up!</Alert>

        <h1 className='mb-4'>Welcome {this.props.location.state.name}!</h1>

        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi accusantium voluptatibus vel temporibus, cum similique, tempora placeat necessitatibus pariatur libero recusandae saepe amet eius molestias dolore asperiores doloribus! Voluptate accusamus cupiditate voluptatibus. Velit alias rem id eius libero at ea? </p>

        <p className='mb-4'>You claim to be a meme master but have you seen memes from all the websites below? If not, it's probably best you come back later. We're looking for the best of the best when it comes to contributing low quality humor to the internet. </p>

        <ul className='mb-4'>
          <li><a href='http://www.memes.com/'>www.memes.com</a></li>
          <li><a href='https://www.reddit.com/r/memes/'>www.reddit.com/r/memes/</a></li>
          <li><a href='https://www.reddit.com/r/wholesomememes/'>www.reddit.com/r/wholesomememes/</a></li>
          <li><a href='https://www.reddit.com/r/dankmemes/'>www.reddit.com/r/dankmemes/</a></li>
          <li><a href='https://www.reddit.com/r/AdviceAnimals/'>www.reddit.com/r/AdviceAnimals/</a></li>
          <li><a href='https://www.urbandictionary.com/define.php?term=meme'>www.urbandictionary.com/define.php?term=meme</a></li>
        </ul>

        <p className='mb-4'>If you are a meme master just give us a few days and we'll be getting back to you. If you are chosen you'll be contributing the the world's largest meme database. Our goal is to create a time capsule of memes, that way future generations or maybe even different, alien species can see you subquality humor.</p>
      </Card>
    );
  }
}

export default Welcome;