import React from 'react';
import './Blogs.css';
import Article from '../../components/article/Article';
import blog01 from '../../assets/Rectangle 22.png';
import blog02 from '../../assets/Rectangle 22 (1).png';
import blog03 from '../../assets/Rectangle 22 (2).png';
import blog04 from '../../assets/Rectangle 22 (3).png';
import blog05 from '../../assets/Rectangle 22 (4).png';


const Blogs = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
          <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, 
We are blogging about it.</h1>
          </div>
          <div className="gpt3__blog-container">
            <div className="gpt3__blog-container__groupA">
<Article imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
            </div>
            <div className="gpt3__blog-container__groupB">
                <Article imgUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
                <Article imgUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
                <Article imgUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
                <Article imgUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
            </div>
          </div>
        </div>
    );
};

export default Blogs;