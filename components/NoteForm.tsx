'use client'
import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Plus } from 'lucide-react'
import { Textarea } from './ui/textarea'
import EmojiPicker from './EmojiPicker'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import qs from 'query-string'
import { useDebounce } from '@/hooks/use-debounce'
import axios from 'axios'
import toast from 'react-hot-toast'

interface NoteFormProps {
    userId: string
}

const formSchema = z.object({
    text: z.string()
})

const NoteForm = ({ userId }: NoteFormProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    })

    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 500)

    useEffect(() => {

        const onSubmit = async (text: string) => {
            try {
                axios.post(`/api/users/${userId}/notes`, { text })
            } catch (error) {
                toast.error('something went wrong while adding note..')
            }
        }

        onSubmit(debouncedValue)

    }, [debouncedValue])



    return (
        <Form {...form}>
            <form>
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='py-2 relative'>
                                    <Textarea
                                        {...field} placeholder={`Note...`} onChange={(e) => setValue(e.target.value)} value={value} className='resize-none px-10 pl-4 bg-transparent text-white text-sm placeholder:text-white/60 focus-visible:ring-0 ring-offset-0 focus-visible:ring-offset-0 w-full' />
                                    <div className='absolute right-8 top-7'>
                                        <EmojiPicker onChange={(emoji: string) => field.onChange(`${field.value} ${emoji}`)} />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default NoteForm