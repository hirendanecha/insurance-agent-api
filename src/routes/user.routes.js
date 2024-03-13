const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const profileController = require("./../controllers/profile.controller");
const authorize = require("../middleware/authorize");

router.post("/register", userController.create);
router.post("/profile", profileController.create);
router.get("/user/verification/:token", userController.verification);
router.get("/countries", userController.getZipCountries);
router.get("/zip/:zip", userController.getZipData);
router.put("/profile/:id", profileController.updateProfile);
router.post("/login", userController.adminLogin);
router.get("/verify-token/:token", userController.verifyToken);
router.post("/forgot-password", userController.forgotPassword);
router.use(authorize.authorization);
router.post("/", userController.findAll);
router.get("/get", userController.getAll);
router.get("/logout", userController.logout);
router.get("/change-status/:id", userController.changeActiveStatus);
router.get("/suspend-user/:id", userController.userSuspend);
router.get("/activate-media/:id", userController.activateMedia);
router.get("/change-user-type/:id", userController.changeAccountType);
router.post("/get-emails", userController.getEmail);
// router.post("/", userController.login);
router.post("/set-password", userController.setPassword);
router.get("/states", userController.getStats);
router.get("/search-user", profileController.getUsersByUsername);
router.get("/:id", userController.findById);
router.get("/profile/:id", profileController.FindProfieById);
router.put("/:id", userController.update);
router.get("/notification/:id", profileController.getNotification);
router.get("/get-notification/:id", profileController.getNotificationById);
router.post("/user/verification/resend", userController.resendVerification);
router.get("/edit-notification/:id", profileController.editNotifications);
router.delete("/:id", userController.delete);
router.delete("/notification/:id", profileController.deleteNotification);
router.get("/groupsAndPosts", profileController.groupsAndPosts);

module.exports = router;
