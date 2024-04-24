
const menu = [
    {
        id: 1,
        title: 'Cricket Crunch Meal',
        category: 'meal',
        price: 449,
        img: 'https://res.cloudinary.com/dakyejg2m/image/upload/v1713896222/Foods/Cricket%20Crunch%20Meal.avif',
        desc: `Crunchy Savings of Rs. 75 & Enjoy 2pc Hot & Crispy Chicken, 4 chicken wings , 
        2 dips & a chilled Pepsi Black Can 300ml [serves 1-2]
        `

    },
    {
        id: 2,
        title: 'Aloo Paratha (1 Pc)',
        category: 'breakfast',
        price: 50,
        img: 'https://res.cloudinary.com/dakyejg2m/image/upload/v1713896507/Foods/AlooParatha.avif',
        desc: `Wholesome parathas with generous seasoned potato stuffing; served with pickle.
        `

    },
    {
        id: 3,
        title: 'Sahi Pulao',
        category: 'meal',
        price: 150,
        img: 'https://res.cloudinary.com/dakyejg2m/image/upload/v1713896680/Foods/SahiPulao.avif',
        desc: `A flavorful and aromatic combination of rice and assorted vegetables, bringing a burst of delightful flavors to your palate.
        `

    },
    {
        id: 4,
        title: 'Chicken Chilli',
        category: 'snaks',
        price: 140,
        img: 'https://res.cloudinary.com/dakyejg2m/image/upload/v1713897610/Foods/ChickenChilli.avif',
        desc: `Juicy chicken chunks dipped in seasoned batter, fried and then tossed in a spicy chilli sauce along with peppers and more.
        `

    },
    {
        id: 5,
        title: 'Paneer Chilli',
        category: 'snaks',
        price: 160,
        img: 'https://res.cloudinary.com/dakyejg2m/image/upload/v1713897724/Foods/v5rknojjhq8swhr8syxi_tsst73.avif',
        desc: `A delightfully flavorful dish prepared with soft paneer and slow cooked cooked with flavorful chili sauce and other masalas.
        `

    }

]



const menuSection  = document.querySelector('.menu-section');
const filterButtons = document.querySelectorAll('.filter-btn');

//Filter
filterButtons.forEach(function(btn) {

           
    btn.addEventListener("click", function(e) {

        filterButtons.forEach(function(btn)  {
                btn.classList.remove('active');
            }
        );
        
        
        e.currentTarget.classList.add('active');
       
        const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((item) => {
        //console.log(item.category)

        if(item.category === category) {
            return item
        }
        
        });


        if (category === "all") {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCategory)
        }


    
    
    })
    
});

const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map(function(item) {
        
        return `
        <div class="col-md-6">
        <div class="row g-0 border rounded  mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-4 d-none d-lg-block">
              <img src=${item.img} class="imagecover" />
            </div>
          <div class="col-8 p-4 d-flex flex-column position-static">
            
            <h3 class="mb-1">${item.title}</h3>
            <p class="card-text mb-auto">${item.desc}</p>
            <strong class="d-inline-block mb-2 text-primary-emphasis">Rs. ${item.price}</strong>
          </div>
          
        </div>
      </div>
        `;
    })

    //console.log(displayMenu)
    displayMenu = displayMenu.join("");
    menuSection.innerHTML = displayMenu;
};



window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
   
});