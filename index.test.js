const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
	/**
	 * Runs the code prior to all tests
	 */
	beforeAll(async () => {
		// the 'sync' method will create tables based on the model class
		// by setting 'force:true' the tables are recreated each time the
		// test suite is run
		await sequelize.sync({ force: true });
	});

	test("can create a Restaurant", async () => {
		// TODO - write test
		let newRestaurant = await Restaurant.create({
			name: "kevin1",
			location: "kevin2",
			cuisine: "kevin3",
		});
		expect(newRestaurant).toBeInstanceOf(Object);
		expect(newRestaurant.name).toBe("kevin1");
		expect(newRestaurant.location).toBe("kevin2");
		expect(newRestaurant.cuisine).toBe("kevin3");
	});

	test("can create a Menu", async () => {
		// TODO - write test
		let newMenu = await Menu.create({
			title: "Dinner Menu",
		});

		expect(newMenu).toBeInstanceOf(Object);
		expect(newMenu.title).toBe("Dinner Menu");
	});

	test("can find Restaurants", async () => {
		// TODO - write test
		let restaurants = seedRestaurant;

		expect(restaurants[0].name).toEqual("AppleBees");
		expect(restaurants[0].location).toEqual("Texas");
		expect(restaurants[0].cuisine).toEqual("FastFood");
	});

	test("can find Menus", async () => {
		// TODO - write test
		let menus = seedMenu;

		expect(menus[0].title).toEqual("Breakfast");
		expect(menus[1].title).toEqual("Lunch");
		expect(menus[2].title).toEqual("Dinner");
	});

	test("can delete Restaurants", async () => {
		// TODO - write test
        const sorryRestaurant = await Restaurant.create({name: 'BadPizzaJoint', location: 'Pluto', cuisine: 'Fast Food'})

        await sorryRestaurant.destroy()

        const foundRestaurant = await Restaurant.findAll({
            where: {
                name: 'BadPizzaJoint'
            }
        })

        expect(foundRestaurant).toEqual([])
	});
});
