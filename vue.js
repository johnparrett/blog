const blog = new Vue ({
    el: '#latest-blog',
    data: {
        title: ['first blog post', 'second blog post'],
        date: ['02/03/2021', '02/23/2021'],
        description: ['today i figured out how to use vue in a website', 'today i worked on the site agian, not as good with vue as i thought i was']
    },
}); 

const recipes = new Vue ({
    el: '#recipes',
    data: {
        image: ['assets/500_F_166495106_36Ya1cHOno00VpHvyOT0CE7dyDKq8DR2.jpg'],
        title: ['tacos', 'pizza', 'cake']
    }
});

const reviews = new Vue ({
    el: '#review',
    data: {
        title: ['Olde Towne Tavern', 'Nosh', 'Local Cantina']
    }
});
