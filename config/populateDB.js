const User = require('../models/users');
const { role } = require('../enumerations');
const populateDB = async () => {
    let user = await User.findOne({ email: "admin@inventooly.com" });
    if (!user) {
        let newUser = new User({
            isVerified: true,
            name: "Admin",
            email: "admin@inventooly.com",
            password: "admin@123",
            tenantId: "admin@inventooly.com",
            role: role.Admin
        });
        await newUser.save();
    } else {
        await User.updateOne({ email: "admin@inventooly.com" }, { $set: { password: "admin@123" } });
    }

    let superAdmin = await User.findOne({ email: "blogger@inventooly.com" });
    if (!superAdmin) {
        let newUser = new User({
            isVerified: true,
            name: "Blogger",
            email: "blogger@inventooly.com",
            password: "-J-Pn8vq_4?Y7K*P",
            tenantId: "blogger@inventooly.com",
            role: role.Blogger
        });
        await newUser.save();
    }
}

module.exports = populateDB;