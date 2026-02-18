import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

const signInSchema = z.object({
  username: z.string().min(3, 'Tên đăng nhập phải có ít nhất 3 ký tự'),
  email: z.email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự")
})

type SignInFormValues = z.infer<typeof signInSchema>