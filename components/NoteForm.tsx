'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Plus } from 'lucide-react'
import { Textarea } from './ui/textarea'

const NoteForm = () => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='p-4 relative'>
                                    <button onClick={() => onOpen('messageImage', {})} className='absolute w-[24px] h-[24px] bg-zink-500 dark:bg-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-300 transition rounded-full left-8 top-7 p-1 flex items-center justify-center' type='button'> {/* кнопка для тригера модалки с загрузкой файлы (даем тип батон, т.к. не хотим, чтобы она затригерилась на энтер случайно)*/}
                                        <Plus className='text-[#313338] dark:text-white' size={20} />
                                    </button>
                                    <Textarea

                                        placeholder={`Message ${type === 'conversation' ? 'CONV' : '#'}`}
                                        {...field} disabled={isSubmitting} className='px-14 border focus-visible:ring-0 ring-offset-0 focus-visible:ring-offset-0 py-6 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-200' />
                                    {/* и небольшой смайлик, для модалки со смайлами */}
                                    <div className='absolute right-8 top-7'>
                                        <EmojiPicker onChange={(emoji: string) => field.onChange(`${field.value} ${emoji}`)} />
                                    </div>
                                </div>
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default NoteForm