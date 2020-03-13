require 'pry'
class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def create
    Task.create(name: params[:task][:text], time_sensitive: params[:task][:timeSensitive])
    render json: Task.all
  end

  def destroy
    Task.destroy(params[:task][:id])
    render json: Task.all
  end

  private

  def task_params
    params.require(:task).permit(:text, :timeSensitive, :id)
  end
end
