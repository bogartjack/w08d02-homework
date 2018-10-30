import React from 'react';
import {Segment, List} from 'semantic-ui-react';

const NewsList = (props) => {
	const allNews = props.news.articles.map((news, i)=>{
		return <Segment key ={i}><List.Item>
			Title: {news.title} <br/>
			Description: {news.description} <br/>
			Url: {news.url} <br/>
			Published: {news.publishedAt} <br/>
		
		</List.Item></Segment>
	});
	return allNews;
}

export default NewsList;
