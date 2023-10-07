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
import { getNote } from '@/actions/get-note'

interface NoteFormProps {
    userId: string;
}

const formSchema = z.object({
    text: z.string().min(1, ' ')
})

const NoteForm = ({ userId }: NoteFormProps) => {

    const [note, setNote] = useState('')
    console.log(userId)

    console.log(note)



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: note || '',
        },
    })

    const [value, setValue] = useState(note)
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

    }, [debouncedValue, note])



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
                                        {...field} placeholder={`click to add a note`} onChange={(e) => setValue(e.target.value)} value={value} className='placeholder-slate-200 placeholder:text-sm border-none resize-none px-10 pl-4 bg-transparent text-white text-sm placeholder:text-white/60 focus-visible:ring-0 ring-offset-0 focus-visible:ring-offset-0 w-full' />
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