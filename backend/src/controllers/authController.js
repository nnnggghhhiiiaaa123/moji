import bcrypt from 'bcrypt';
import User from '../models/User';

export const signUp = async (req, res) => {
    try {
        const { username, password, email, firstName, lastName } = res.body;

        if (!username || !password || !email || !firstName || !lastName) {
            return res
                .status(400)
                .json({
                    message:
                        "Không thể thiếu username, password, email, firstName, lastName"
                });
        }

        // kiểm tra username tồn tại chưa
        const duplicate = await User.findOne({username});

        if (duplicate) {
            return res.status(409).json({message: "username đã tồn tại"});
        }
        // mã hóa password
        const hashedPassword = await bcrypt.hash(password, 10); // salt = 10

        // tạo user mới 

        // return

    } catch (error) {

    }
}