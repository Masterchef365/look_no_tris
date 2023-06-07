#version 450
precision mediump float;

uniform mat4 view;
uniform mat4 proj;
//uniform mat4 transf;
//uniform mat4 extra;

in vec4 f_color;

out vec4 out_color;

void main() {
    vec2 uv = f_color.xy;

    mat4 iv = inverse(proj * mat4(mat3(view)));

    vec3 screenspace_ray = vec3(uv * 2. - 1., 0.2);
    vec3 color = normalize((iv * vec4(screenspace_ray, 1)).xyz);

    out_color = vec4(color,1);
}

