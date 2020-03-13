class HabitsController < ApplicationController
  def index
    render json: Habit.all
  end

  def create
    Habit.create(name: params[:habit][:text])
    render json: Habit.all
  end

  def destroy
    Habit.destroy(params[:habit][:id])
    render json: Habit.all
  end

  private

  def habit_params
    params.require(:habit).permit(:id, :text)
  end
end