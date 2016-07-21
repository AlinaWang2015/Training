News.news = News.Object.extend({
    statics: {
        add: function (data) {
            var col12Div = document.createElement('div');
            col12Div.className = 'col-md-12 column';

            var titleH2 = document.createElement('h2');
            titleH2.className = 'news_title';
            titleH2.innerHTML = data.date + ' ---- ' + data.title;
            col12Div.appendChild(titleH2);
            
            var captionP = document.createElement('p');
            captionP.className = 'news_caption';
            captionP.innerHTML = data.caption;
            col12Div.appendChild(captionP);

            var detailP = document.createElement('p');
            detailP.className = 'view_details';
            var detailA = document.createElement('a');
            detailA.className = 'btn';
            detailA.href = 'thinkgeo.com/press-releases' + data.href;
            detailA.innerHTML = '更多信息';
            detailP.appendChild(detailA);
            col12Div.appendChild(detailP);

            var hr = document.createElement('hr');
            hr.className = 'hr_inner';
            col12Div.appendChild(hr);

            var clearDiv = document.createElement('div');
            clearDiv.className = 'row clearfix';
            clearDiv.appendChild(col12Div);

            var containerDiv = document.getElementById('News_container');
            containerDiv.appendChild(clearDiv);
        }
    }
});