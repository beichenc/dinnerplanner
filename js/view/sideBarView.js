//Side Bar View Object constructor
var SideBarView = function (container, model) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.entry = container.find(".nameAndCostEntry");
	this.total = container.find(".nameAndCostTotal");

	// Get relevant data from the model and set some data (are we supposed to set data here?)
	this.fullMenu = model.getFullMenu();
	//model.addDishToMenu(100);
	//model.addDishToMenu(3);
	model.setNumberOfGuests(4);
	this.totalCost = model.getTotalMenuPrice();

	// Populate the view

	// Number of guests
	this.numberOfGuests.html(model.getNumberOfGuests());

	// Price of each dish
	for (key in this.fullMenu) {
	  var course = this.fullMenu[key];
		var price = model.getPrice(course.id);
		this.entry.append("<div class='col-lg-6'><p>" + course.name + "</p></div><div id='cost'><p>" + price.toFixed(2) + "</p></div>");
	}

	// Total price for menu
	this.total.append("<div id='cost'><p>SEK " + this.totalCost.toFixed(2) + "</p></div>");

	// Attach listeners to HTML controls - question: is this supposed to be here or in the view controller
	this.plusButton.click(function() {
		model.increaseNumberOfGuests();
		// Now how do I update the view to display this new number?
		/*this.numberOfGuests.html(model.getNumberOfGuests());*/
	});

	this.minusButton.click(function() {
		model.decreaseNumberOfGuests();
		// Now how do I update the view to display this new number?
		/*this.numberOfGuests.html(model.getNumberOfGuests());*/
	});

}
