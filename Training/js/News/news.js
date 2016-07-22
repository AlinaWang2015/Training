News.news = News.Object.extend({
    statics: {
        add: function (data) {
            var newsDiv = document.createElement('div');
            newsDiv.className = 'news_item';

            var titleH2 = document.createElement('h2');
            titleH2.className = 'news_title';
            titleH2.innerHTML = data.date + ' ——— ' + data.title;
            newsDiv.appendChild(titleH2);
            
            var captionP = document.createElement('p');
            captionP.className = 'news_caption';
            captionP.innerHTML = data.caption;
            newsDiv.appendChild(captionP);

            var detailP = document.createElement('p');
            detailP.className = 'view_details';
            var detailA = document.createElement('a');
            detailA.className = 'btn';
            detailA.href = 'http://thinkgeo.com/press-releases' + data.href;
            detailA.innerHTML = '更多信息';
            detailP.appendChild(detailA);
            newsDiv.appendChild(detailP);
            
            var clearDiv = document.createElement('div');
            clearDiv.className = 'row clearfix';
            clearDiv.appendChild(newsDiv);

            var hr = document.createElement('hr');
            hr.className = 'hr_inner';
            clearDiv.appendChild(hr);

            var containerDiv = document.getElementById('News_container');
            containerDiv.appendChild(clearDiv);
        }
    }
});