const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({"message": "All fields required"});
    } else {
        res
          .status(200)
          .json({"message": "You are welcome"});
    }    
  };
  
  const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({"message": "All fields required"});
    } else {
        res
          .status(200)
          .json({"message": "Hello"});
      };    
  };

module.exports = {
    register,
    login
};