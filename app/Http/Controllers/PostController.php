<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostAction;
use App\Models\UserFollow;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PostController extends Controller
{

    public function feed(){
        $posts = Post::with('user')
        ->withCount(['likes' => function($query){
                $query->where('action_value',true);
            }])
        ->orderBy('id','desc')
        ->get()
        ->toArray();

        return Inertia::render('Feed/Feed',['posts' => $posts]);
    }


    public function myNewPost(){

        return Inertia::render('CreatePost/CreatePost');
    }

    public function storeNewPost(Request $request){
        $input = $request->all();
        $post = Post::create([
            'caption' => $input['caption'],
            'user_id' => Auth::id(),
        ]);

        $post->addMedia($input['image'])->toMediaCollection(Post::POST_COLLECTION);

        return to_route('my-profile.index');
    }

    public function likePost(Request $request){
        $input = $request->all();

        PostAction::updateOrCreate(
            [
                'post_id' => $input['post_id'],
                'user_id' => Auth::id(),
                'action_type' => 1,
            ],[
                'action_value' => $input['like'],
            ]
        );

        return redirect()->back();
    }

    public function commentPost(Request $request)
{
    $request->validate([
        'post_id' => 'required|exists:posts,id',
        // Optionally: you could add 'comment_text' => 'required|string|max:255' if you want text comments
    ]);

    PostAction::create([
        'post_id' => $request->post_id,
        'user_id' => Auth::id(),
        'action_type' => 2, // 2 could represent "comment" in your action types
        'action_value' => true, // you could store true just to mark it happened
    ]);

    return redirect()->back();
}

}
