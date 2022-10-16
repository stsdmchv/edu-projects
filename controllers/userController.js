// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = (req, res) => {
  const user = {
    name: "Stas",
    age:28
  }
  res.json(user)
}