// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"

// const FormSchema = z.object({
//   query: z
//     .string()
//     .min(5, {
//       message: "Questions must be at least 5 characters.",
//     }),
// })

// export default function AIChat() {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   })

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }

//   return (
//     <>
//     <Form {...form}>
      
//       <form className="aichat space-y-6">
    
//         <FormField
//           control={form.control}
//           name="ai"
//           render={({ field }) => (
//             <FormItem className="input">
//               <FormControl>
//                 {/* {/* <Textarea 
//                   placeholder="Ask the AI about your Tax query"
//                   className="resize-none"
//                   {...field}
//                 /> */}
//                */}
                
//               </FormControl>
//               <button className="btn_ai">hh</button>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit" >Ask AI</Button>
      
//       </form>
//     </Form>
//     </>
//   )
// }
